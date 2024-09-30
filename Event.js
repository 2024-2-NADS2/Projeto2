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

    // get
    getId() {
        return this.idEvento;
    }

    getTitulo() {
        return this.titulo;
    }

    getDescricao() {
        return this.descricao;
    }

    getTipoDeEvento() {
        return this.tipoDeEvento;
    }

    getData() {
        return this.data;
    }

    getHora() {
        return this.hora;
    }

    getLocal() {
        return this.local;
    }

    getOrganizador() {
        return this.organizador;
    }

    getPreco() {
        return this.preco;
    }

    getDetails(){
        return `${this.idEvento} - ${this.data} @ ${this.local}`;
    }
}
//exportar
module.exports = Event;


