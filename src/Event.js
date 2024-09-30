class Event {
    constructor(idEvento, titulo, descricao, tipoDeEvento, data, hora, local, organizador, preco) {
        this.idEvento = idEvento;
        this.titulo = titulo;
        this.descricao = descricao;
        this.tipoDeEvento = tipoDeEvento;
        this.data = data;
        this.hora = hora;
        this.local = local;
        this.organizador = organizador;
        this.preco = preco;
    }

    getResumo() {
        return {
            id: this.idEvento,
            titulo: this.titulo,
            data: this.data,
            hora: this.hora,
            local: this.local,
            preco: this.preco
        };
    }

    getDetalhes() {
        return {
            id: this.idEvento,
            titulo: this.titulo,
            descricao: this.descricao,
            tipoDeEvento: this.tipoDeEvento,
            data: this.data,
            hora: this.hora,
            local: this.local,
            organizador: this.organizador,
            preco: this.preco
        };
    }
}

module.exports = Event;
