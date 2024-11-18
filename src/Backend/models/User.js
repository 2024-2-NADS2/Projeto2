class user {
    constructor( nome, sobrenome, email, senha) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.senha = senha
    }

    // get


    getNome() {
        return this.nome
    }
    getSobrenome() {
        return this.sobrenome
    }

    getEmail() {
        return this.email
    }

    getSenha(){
        return this.senha
    }

    verificarSenha(senha) {
        return this.senha === senha
    }
}

module.exports = user
