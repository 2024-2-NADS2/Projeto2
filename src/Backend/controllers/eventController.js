const chubdatabase = require('../db/db');
const Event = require('../models/Event');
const axios = require('axios');
require('dotenv').config();

// Função para criar evento
exports.createEvent = async (req, res) => {

    const {
        nomeLocal, cep, rua, numero, complemento, bairro, cidade, estado,
        titulo, preco, linkPagamento, data, hora, descricao, tema,
        classificacao, organizador, organizadorDetalhes
    } = req.body

    const idUsuario = req.body.idUsuario
    const userRole = req.body.userRole

    let status = "Em análise"
    if (userRole == 'Admin' || userRole == 'Verificado') {
        status = "Aprovado"
    }
  
    
    // Verificação da imagem no input
    const imagem = req.file;
    if (!imagem) {
        return res.status(400).json({ error: 'Imagem não enviada' })
    }

    // Converte a imagem para base64 antes de enviar para o Imgur
    const imagemBase64 = imagem.buffer.toString('base64')

    try {
        // Envia a imagem para o Imgur e obtém o URL de retorno
        const imgurResponse = await axios.post(
            'https://api.imgur.com/3/image',
            { image: imagemBase64 },
            {
                headers: {
                    Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`
                }
            }
        )
        const imagemUrl = imgurResponse.data.data.link

        // Cria a instância do evento com os dados recebidos
        const event = new Event(
            nomeLocal, cep, rua, numero, complemento, bairro, cidade, estado,
            titulo, preco, organizador, linkPagamento, data, hora,
            descricao, tema, classificacao, imagemUrl, organizadorDetalhes, idUsuario, status
        )

        // Insere o evento no banco de dados usando o método da classe Event
        chubdatabase.query(event.getInsertQuery(), event.getInsertValues(), (err, result) => {
            if (err) {
                console.error('Erro ao inserir evento no banco de dados:', err)
                return res.status(500).json({ error: 'Erro ao salvar evento no banco de dados' })
            }
            res.status(201).json({ message: 'Evento criado com sucesso!', eventoId: result.insertId })
        })

    } catch (error) {
        console.error('Erro ao enviar imagem para o Imgur:', error)
        res.status(500).json({ error: 'Erro ao enviar imagem para o Imgur' })
    }
}


// Função para obter todos os eventos no banner principal
exports.getBannerEvents = (req, res) => {
    const sqlQuery = `SELECT * FROM eventos WHERE status = "aprovado" ORDER BY RAND()`
    chubdatabase.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('Erro ao buscar eventos no banco de dados:', err)
            return res.status(500).json({ error: 'Erro ao buscar eventos' })
        }
        res.json(results)
    })
}

exports.getEventStatus = (req, res) => {
    const eventId = req.params.id
    const sqlQuery = `SELECT status FROM eventos WHERE id_evento = ?`

    chubdatabase.query(sqlQuery, [eventId], (err, results) => {
        if (err) {
            console.error('Erro ao buscar status do evento no banco de dados:', err)
            return res.status(500).json({ error: 'Erro ao buscar status do evento' })
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Evento não encontrado' })
        }

        res.json({ status: results[0].status })
    })
}


//Função para obter os eventos por ID
exports.getEventById = (req, res) => {
    const eventId = req.params.id; 
    const sqlQuery = `SELECT * FROM eventos WHERE id_evento = ?` 
    
    chubdatabase.query(sqlQuery, [eventId], (err, results) => {
        if (err) {
            console.error('Erro ao buscar o evento no banco de dados:', err)
            return res.status(500).json({ error: 'Erro ao buscar o evento' })
        }
        
        if (results.length === 0) {
            return res.status(404).json({ error: 'Evento não encontrado' })
        }

        res.json(results[0])
    })
}

//Seleciona os eventos aprovados pelo tema 
exports.getEventsByTema = (req, res) => {
    const tema = req.params.tema
    const sqlQuery = `SELECT * FROM eventos WHERE tema = ? AND status = "aprovado" ORDER BY RAND()`
  
    chubdatabase.query(sqlQuery, [tema], (err, results) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err)
        return res.status(500).json({ error: 'Erro ao executar a consulta' })
      }
  
      if (results.length === 0) {
        return res.status(404).json({ error: 'Eventos não encontrados' })
      }
  
      res.json(results)
    })
}

//Função para obter os eventos em análise
exports.getAllEventsWithStatus = (req, res) => {
    const sqlQuery = `SELECT * FROM eventos WHERE status = 'em análise' ORDER BY data_evento ASC`
    chubdatabase.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('Erro ao buscar eventos no banco de dados:', err)
            return res.status(500).json({ error: 'Erro ao buscar eventos' })
        }
        res.json(results)
    })
}



// Função para deletar um evento

exports.deleteEvent = (req, res) => {
    const { eventId } = req.params

        const sqlQueryDelete = `DELETE FROM eventos WHERE id_evento = ?`

        chubdatabase.query(sqlQueryDelete, [eventId], (err) => {
            if (err) {
                console.error('Erro ao deletar evento no banco de dados:', err)
                return res.status(500).json({ error: 'Erro ao deletar evento' })
            }

            res.status(204).send()
        })
}


exports.approveEvent = (req, res) => {
    const { id } = req.params
    const { status } = req.body
  
    if (status !== 'aprovado' && status !== 'em análise') {
      return res.status(400).json({ error: 'Status inválido' })
    }
  
    const sqlUpdateStatus = `UPDATE eventos SET status = ? WHERE id_evento = ?`
  
    chubdatabase.query(sqlUpdateStatus, [status, id], (err) => {
      if (err) {
        console.error('Erro ao alterar o status do evento:', err)
        return res.status(500).json({ error: 'Erro ao alterar o status do evento' })
      }
  
      res.status(200).json({ message: `Status do evento alterado para ${status} com sucesso` })
    })
}

//Adição acessos em cada evento
exports.eventAccess = (req, res) => {
    const eventoId = req.params.id
    const sqlIncrement = `UPDATE eventos SET acessos = acessos + 1 WHERE id_evento = ?`
    chubdatabase.query(sqlIncrement, [eventoId], (err, result) =>{
        if(err){
            return res.status(500).json('Erro ao registrar acesso.')
        }
        res.status(200).json('Acesso registrado com sucesso.')
    })
}


//Query customizada para acessar os eventos no banco de dados de forma dinâmica
exports.AllEventsFilter = (req, res) => {
    const { query, cidade, order, tema, preco, classificacao, startDate, endDate } = req.query
    let sqlQuery = 'SELECT * FROM eventos WHERE status = "aprovado" AND 1=1' 
    let values = []

    // Filtros dinamicos
    if (query) {
        const queryLike = `%${query}%`
        sqlQuery += ' AND (titulo LIKE ? OR descricao LIKE ? OR cidade LIKE ? OR bairro LIKE ? OR tema LIKE ? OR classificacao LIKE ?)'
        values.push(queryLike, queryLike, queryLike, queryLike, queryLike, queryLike)
    }

    if(startDate && endDate){
        sqlQuery += ' AND data_evento BETWEEN ? AND  ?'
        values.push(startDate, endDate)
        
    } else if(startDate){
        sqlQuery += ' AND data_evento = ?'
        values.push(startDate)
    }
    
    if (cidade) {
        sqlQuery += ' AND cidade = ?'
        values.push(cidade)
    }
    if (tema) {
        sqlQuery += ' AND tema = ?'
        values.push(tema)
    }
    if (preco) {
        sqlQuery += ' AND preco = ?'
        values.push(preco)
    }
    if (classificacao) {
        sqlQuery += ' AND classificacao = ?'
        values.push(classificacao)
    }

    if (order === 'Data') {
        sqlQuery += ' ORDER BY data_evento ASC, horario ASC'
    } 
    if (order === 'Relevância') {
        sqlQuery += ' ORDER BY acessos DESC'
    }


    chubdatabase.query(sqlQuery, values, (err, results) => {
        if (err) {
            console.error('Erro no banco de dados: ', err)
            return res.status(500).json({ message: 'Erro ao buscar eventos' })
        }
        return res.json(results)
    })
}

    

