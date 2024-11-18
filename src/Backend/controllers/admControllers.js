const chubdatabase = require('../db/db.js')

//Função para buscar todos os usuários
exports.getAllUsers = (req, res) => {
    const query = `SELECT id_usuario, nome, sobrenome, email, role FROM usuarios`

    chubdatabase.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuários:', err)
            res.status(500).json({ error: 'Erro ao buscar usuários' })
            return
        }
        res.json(results)
    })
}

exports.deleteUser = (req, res) => {
    const { id } = req.params
    const query = 'DELETE FROM usuarios WHERE id_usuario = ?'

    chubdatabase.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro ao deletar usuário:', err)
            res.status(500).json({ error: 'Erro ao deletar usuário' })
            return
        }
        res.json({ message: 'Usuário deletado com sucesso!' })
    })
}

//Cargo de administrador ao usuário
exports.setAdmin = (req, res) => {
    const { id } = req.params
    const query = 'UPDATE usuarios SET role = "admin" WHERE id_usuario = ?'

    chubdatabase.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro ao promover usuário a administrador:', err)
            res.status(500).json({ error: 'Erro ao promover usuário a administrador' })
            return;
        }
        res.json({ message: 'Usuário promovido a administrador!' })
    })
}

//Cargo de verificado ao usuário
exports.setVerifiedUser = (req, res) => {
    const { id } = req.params
    const query = 'UPDATE usuarios SET role = "verificado" WHERE id_usuario = ?'

    chubdatabase.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro ao promover usuário a verificado:', err)
            res.status(500).json({ error: 'Erro ao promover usuário a verificado' })
            return
        }
        res.json({ message: 'Conta promovida a verificada!' })
    })
}
//Cargo de usuário comum
exports.setCommonUser = (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE usuarios SET role = "comum" WHERE id_usuario = ?'

    chubdatabase.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro ao promover usuário a comum:', err)
            res.status(500).json({ error: 'Erro ao promover a usuário comum' })
            return
        }
        res.json({ message: 'Conta habilitada como comum!' })
    })
}

