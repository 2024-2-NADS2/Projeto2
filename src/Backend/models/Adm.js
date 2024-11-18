import User from "./User";

class Adm extends User {
    constructor(id_usuario, nome, email, senha, idEmpresarial, nomeEmpresa) {
        super(id_usuario, nome, email, senha)
        this.idEmpresarial = idEmpresarial
        this.nomeEmpresa = nomeEmpresa
    }

    publicEvent(evento) {
        evento.aprovado = true
    }
}

module.exports = Adm
