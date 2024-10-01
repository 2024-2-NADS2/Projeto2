class User {
    constructor(idUsuario, nome, email, senha) {
        if (!this.verificarSenhaMinima(senha)) {
            throw new Error("A senha deve ter ao menos 20 caracteres.");
        }
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.email = email;
        this.senha = senha; 
    }

    // get
    getId() {
        return this.idUsuario;
    }

    getNome() {
        return this.nome;
    }

    getEmail() {
        return this.email;
    }

    verificarSenha(senha){
        return this.senha === senha;
    }

    verificarSenhaMinima(senha) {
        return senha.length >= 20;
    }

}

//exportar
module.exports = User;
