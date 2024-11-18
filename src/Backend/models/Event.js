class Event {
    constructor(nomeLocal, cep, rua, numero, complemento, bairro, cidade, estado, titulo, preco, organizador, linkPagamento, data, hora, descricao, tema, classificacao, imagemUrl, organizadorDetalhes, idUsuario, status) {
        this.nomeLocal = nomeLocal
        this.cep = cep
        this.rua = rua
        this.numero = numero
        this.complemento = complemento
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.titulo = titulo
        this.preco = preco
        this.organizador = organizador
        this.linkPagamento = linkPagamento
        this.data = data
        this.hora = hora
        this.descricao = descricao
        this.tema = tema
        this.classificacao = classificacao
        this.imagemUrl = imagemUrl
        this.organizadorDetalhes = organizadorDetalhes
        this.idUsuario = idUsuario
        this.status = status
    }

    getInsertQuery() {
        return `
            INSERT INTO eventos 
            (nomeLocal, cep, rua, numero, complemento, bairro, cidade, estado, titulo, preco, organizador, linkPagamento, data_evento, horario, descricao, tema, classificacao, imagemUrl, organizadorDetalhes, idUsuario, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `
    }

    getInsertValues() {
        return [
            this.nomeLocal,
            this.cep,
            this.rua,
            this.numero,
            this.complemento,
            this.bairro,
            this.cidade,
            this.estado,
            this.titulo,
            this.preco,
            this.organizador,
            this.linkPagamento,
            this.data,
            this.hora,
            this.descricao,
            this.tema,
            this.classificacao,
            this.imagemUrl,
            this.organizadorDetalhes,
            this.idUsuario,
            this.status
        ]
    }
}

module.exports = Event
