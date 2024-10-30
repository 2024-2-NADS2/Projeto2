class Event {
    constructor(idEvento, titulo, descricao, cep, rua, numero, complemento, bairro, cidade, estado, dataEvento, horarioEvento, tema, classificacao, preco, organizador, idUsuario, imagemUrl, status) {
        this.idEvento = idEvento;
        this.titulo = titulo;
        this.descricao = descricao;
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.dataEvento = dataEvento;
        this.horarioEvento = horarioEvento;
        this.tema = tema;
        this.classificacao = classificacao;
        this.preco = preco;
        this.organizador = organizador;
        this.idUsuario = idUsuario;
        this.imagemUrl = imagemUrl;
        this.status = status;
    }

    getResumo() {
        return `Evento: ${this.titulo}\n` +
               `Data: ${this.dataEvento} às ${this.horarioEvento}\n` +
               `Local: ${this.rua}, ${this.numero}, ${this.cidade} - ${this.estado}\n` +
               `Preço: R$ ${this.preco}\n` +
               `Status: ${this.status === 'implementado' ? 'Aprovado' : 'Em análise'}`;
    }

    // Getters
    getIdEvento() {
        return this.idEvento;
    }

    getTitulo() {
        return this.titulo;
    }

    getDescricao() {
        return this.descricao;
    }

    getCep() {
        return this.cep;
    }

    getRua() {
        return this.rua;
    }

    getNumero() {
        return this.numero;
    }

    getComplemento() {
        return this.complemento;
    }

    getBairro() {
        return this.bairro;
    }

    getCidade() {
        return this.cidade;
    }

    getEstado() {
        return this.estado;
    }

    getDataEvento() {
        return this.dataEvento;
    }

    getHorarioEvento() {
        return this.horarioEvento;
    }

    getTema() {
        return this.tema;
    }

    getClassificacao() {
        return this.classificacao;
    }

    getPreco() {
        return this.preco;
    }

    getOrganizador() {
        return this.organizador;
    }

    getIdUsuario() {
        return this.idUsuario;
    }

    getImagemUrl() {
        return this.imagemUrl;
    }

    getStatus(){
        return this.status;
    }

    // Setters
    setTitulo(titulo) {
        this.titulo = titulo;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
    }

    setCep(cep) {
        this.cep = cep;
    }

    setRua(rua) {
        this.rua = rua;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setComplemento(complemento) {
        this.complemento = complemento;
    }

    setBairro(bairro) {
        this.bairro = bairro;
    }

    setCidade(cidade) {
        this.cidade = cidade;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    setDataEvento(dataEvento) {
        this.dataEvento = dataEvento;
    }

    setHorarioEvento(horarioEvento) {
        this.horarioEvento = horarioEvento;
    }

    setTema(tema) {
        this.tema = tema;
    }

    setClassificacao(classificacao) {
        this.classificacao = classificacao;
    }

    setPago(pago) {
        this.pago = pago;
    }

    setOrganizador(organizador) {
        this.organizador = organizador;
    }

    setIdUsuario(idUsuario) {
        this.idUsuario = idUsuario;
    }

    setImagemUrl(imagemUrl) {
        this.imagemUrl = imagemUrl;
    }

    setStatus(status){
        this.status = status;
    }
}

// Exemplo de uso
/*
let evento = new Event(1, "Show de Música", "Uma noite incrível de música ao vivo", "12345-678", "Rua Principal", 123, "", "Centro", "São Paulo", "SP", "2024-11-01", "20:00", "Música", "Livre", 50, "Organizador X", 1, "url-imagem", "implementado");
*/
console.log(evento.getResumo());

module.exports = Event;
