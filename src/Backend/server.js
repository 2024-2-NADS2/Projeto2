const express = require('express');
const cors = require('cors')
const app = express();
const chubdatabase = require('./db/db.js');
const bcrypt = require('bcrypt')
const saltRounds = 10
const PORT = process.env.PORT || 3001
app.use(express.json());
app.use(cors())
// app.use('/cadastro', userRoutes)


//api referente a pagina de cadastro no front
app.post("/cadastro", (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;

    // verifica se o email já existe no banco de dados
    chubdatabase.query(`SELECT * FROM usuarios WHERE email = ?`, [email], (err, result) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        //criptografa a senha e faz cria o usuario no banco de dados
        if (result.length === 0) {
            bcrypt.hash(senha, saltRounds, (err, hash) => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }

                chubdatabase.query(
                    `INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)`,
                    [nome, sobrenome, email, hash],
                    (err) => {
                        if (err) {
                            res.status(500).send(err);
                            return;
                        }
                        res.status(201).send({ mensagem: "Cadastrado com sucesso" });
                    }
                )
            })
        } else {
            res.status(409).send({ mensagem: "Email já cadastrado" });
        }
    })
})

//api reerente a pagina de login no front
app.post("/entrar", (req, res) =>{
    const { email, password } = req.body;

    chubdatabase.query(`SELECT * FROM usuarios WHERE email = ?`, [email], (err, result) =>{
        if(err){
            res.status(500).send({msg: "Erro no servidor"})
        }
        if(result.length >0){
            //verificaçao da senha criptografada no banco de dados
            bcrypt.compare(password, result[0].senha, (err, match) =>{
                if(err){
                    res.status(500).send({msg: "Erro ao comparar senha"})
                    return
                }
                if(match){
                    res.send({msg: "Usuário logado"})
                }else{
                    res.send({ms:"Senha incorreta"})
                }
            })
        }else{
            res.send({msg: "Conta não encontrada"})
        }
    })
})




app.listen(PORT, () => {
    console.log(`Servidor rodando ${PORT}`);
});
