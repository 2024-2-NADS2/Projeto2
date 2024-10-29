class Adm extends Usuario {
    constructor(idUsuario, nome, email, senha, idEmpresarial, nomeEmpresa) {
        super(idUsuario, nome, email, senha);
        this.idEmpresarial = idEmpresarial;
        this.nomeEmpresa = nomeEmpresa;
    }

    publicEvent(evento) {
        evento.aprovado = true; // Eventos do administrador são aprovados automaticamente
        // Lógica para publicar o evento diretamente no sistema
    }
}

module.exports = Adm
