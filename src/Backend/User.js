class User {
    constructor( nome, sobrenome, email, senha) {
        this.nome = nome;
        this.sobrenome = sobrenome
        this.email = email;
        this.senha = senha; 
    }

    // get

    getNome() {
        return this.nome;
    }
    getSobrenome() {
        return this.sobrenome;
    }

    getEmail() {
        return this.email;
    }
    
    
    verificarSenha(senha) {
        return this.senha === senha; 
    }

    //set
    setNome(nome) {
        this.nome = nome;
    }

    setSobrenome(sobrenome) {
        this.sobrenome = sobrenome;
    }

    setEmail(email) {
        this.email = email;
    }

    setSenha(senha) {
        this.senha = senha;
    }
}

module.exports = User
