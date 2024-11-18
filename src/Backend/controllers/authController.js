const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const chubdatabase = require('../db/db.js')
const SECRET_KEY = process.env.JWT_SECRET_KEY

exports.login = (req, res) => {
    const { email, password } = req.body

    chubdatabase.query(`SELECT * FROM usuarios WHERE email = ?`, [email], (err, result) => {
        if (err) {
            return res.status(500).send({ msg: "Erro no servidor" })
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].senha, (err, match) => {
                if (err) {
                    return res.status(500).send({ msg: "Erro ao comparar senha" })
                }
                if (match) {
                    const token = jwt.sign(
                        { id_usuario: result[0].id_usuario, role: result[0].role },
                        SECRET_KEY,
                        { expiresIn: '1h' }
                    );
                    res.send({
                        msg: "Usuário logado",
                        token,
                        id_usuario: result[0].id_usuario,
                        role: result[0].role
                    })
                } else {
                    res.send({ msg: "Senha incorreta" })
                }
            })
        } else {
            res.send({ msg: "Conta não encontrada" })
        }
    })
}
