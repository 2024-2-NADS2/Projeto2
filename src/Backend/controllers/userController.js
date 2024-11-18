const User = require('../models/User')
const chubdatabase = require('../db/db');
const bcrypt = require('bcrypt')
const saltRounds = 10

//Controle de cadastro
exports.userSignUp = (req, res) => {
    const { nome, sobrenome, email, senha } = req.body
    

    // verifica se o email já existe no banco de dados
    chubdatabase.query(`SELECT * FROM usuarios WHERE email = ?`, [email], (err, result) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        if (result.length === 0) {
            //criptografa a senha cria o usuario no banco de dados
            bcrypt.hash(senha, saltRounds, (err, hash) => {
                if (err) {
                    res.status(500).send(err)
                    return
                }
                //Instancia um novo usuário 
                const user = new User(nome, sobrenome, email, hash)

                const sqlinsertUser = `INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)`
                //Insere o usuário no banco de dados
                chubdatabase.query(
                    sqlinsertUser,
                    [user.getNome(), user.getSobrenome(), user.getEmail(), user.getSenha()],
                    (err) => {
                        if (err) {
                            res.status(500).send(err)
                            return
                        }
                        res.status(201).send({ mensagem: "Cadastrado com sucesso" })
                    }
                )
            })
        } else {
            res.status(409).send({ mensagem: "Email já cadastrado" })
        }
    })
}


exports.getUserById = (req, res) =>{
    const usuarioId = req.params.id
    const sqlQuery = `SELECT * FROM usuarios WHERE id_usuario = ?`

    chubdatabase.query(sqlQuery, [usuarioId], (erro, results) => {
        if (erro) {
            console.error('Erro ao buscar o usuário no banco de dados:', erro)
            return res.status(500).json({ error: 'Erro ao buscar o usuário' })
        }
        
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' })
        }
    
        res.json(results[0]);
    })

}

//Eventos criados pelo usuário
exports.getEventCreatedByUser = (req, res) =>{
    const userId = req.params.id
    const sqlQuery = `SELECT * FROM eventos WHERE idUsuario = ?`

    chubdatabase.query(sqlQuery, [userId], (erro, results) =>{
        if(erro){
            console.error('Erro ao buscar eventos do usuário no banco de dados: ', erro)
            return res.status(500).json({erro: 'Erro ao buscar eventos'})
        }
        res.json(results)
    })
}

//Função para salvar eventos
exports.saveEvent = (req, res) => {
    const idEvento = req.params.id
    const {idUsuario, dataEvento} = req.body

    const sqlQuery = `INSERT INTO favoritos (id_evento, id_usuario, data_favoritado) VALUES (?, ?, ?) `

    chubdatabase.query(sqlQuery, [idEvento, idUsuario, dataEvento ], (error, results) =>{
        if(error){
            console.error('Erro ao salvar evento nos favoritos:', error)
            return res.status(500).json({error: "Erro ao salvar evento nos favoritos"})
        }
        res.status(201).json({message: "Evento salvo com sucesso", results})
    })
}

exports.getSavedEvents = (req, res) => {
    const { userId } = req.params

    const query = `
        SELECT e.id_evento, e.titulo, e.data_evento, e.horario, e.rua, e.numero, e.imagemUrl
        FROM favoritos f
        JOIN eventos e ON f.id_evento = e.id_evento
        WHERE f.id_usuario = ?
        ORDER BY data_evento ASC`

    chubdatabase.query(query, [userId], (error, results) => {
        if (error) {
            console.error("Erro ao buscar eventos salvos:", error)
            return res.status(500).json({ error: "Erro ao buscar eventos salvos" })
        }
        res.status(200).json(results)
    })
}

exports.deleteFavoriteEvent = (req, res) => {
    const idEvento = req.params.id
    const { idUsuario } = req.body;

    const sqlQuery = `DELETE FROM favoritos WHERE id_evento = ? AND id_usuario = ?`

    chubdatabase.query(sqlQuery, [idEvento, idUsuario], (error, results) => {
        if (error) {
            console.error('Erro ao desfavoritar o evento:', error)
            return res.status(500).json({ error: "Erro ao desfavoritar o evento" })
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Favorito não encontrado" })
        }

        res.status(200).json({ message: "Evento desfavoritado com sucesso", results })
    })
}

//Verifica o evento salvo
exports.verifySave = (req, res) => {
    const { id: idEvento, userId: idUsuario } = req.params

    const query = ` SELECT * FROM favoritos WHERE id_evento = ? AND id_usuario = ? `

    chubdatabase.query(query, [idEvento, idUsuario], (error, results) => {
        if (error) {
            console.error("Erro ao verificar favorito:", error);
            return res.status(500).json({ error: "Erro ao verificar favorito" })
        }
        res.status(200).json({ isFavorited: results.length > 0 })
    })
}

//Notifica o evento salvo
exports.notifyUser = (req, res) => {
    const { id } = req.params;

    const query = `
        SELECT e.id_evento, e.titulo, e.data_evento, e.imagemUrl
        FROM favoritos f
        JOIN eventos e ON f.id_evento = e.id_evento
        WHERE f.id_usuario = ? AND 
              DATEDIFF(e.data_evento, CURDATE()) IN (0, 3, 5)
    `

    chubdatabase.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro ao buscar notificações:', err)
            return res.status(500).json({ error: 'Erro ao buscar notificações' })
        }

        res.status(200).json(results)
    })
}

exports.supportMessage = (req, res) => {
    const { email, assunto, descricao } = req.body

    if (!email || !assunto || !descricao) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' })
    }


    const query = 'INSERT INTO suporte_contato (email, assunto, descricao) VALUES (?, ?, ?)'
    const values = [email, assunto, descricao];

    chubdatabase.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados no banco: ', err)
            return res.status(500).json({ message: 'Erro ao enviar mensagem. Tente novamente.' })
        }

        return res.status(201).json({ message: 'Mensagem enviada com sucesso!' })
    })
}