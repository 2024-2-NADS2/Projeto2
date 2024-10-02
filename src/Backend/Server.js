const express = require('express');
const Event = require('./event.js');
const User = require('./user.js');  
const app = express();
const port = 3000;
app.use(express.json()); 

const eventos = [];

const usuarios = [];

app.post('/eventos', (req, res) => {
    const { idEvento, titulo, descricao, tipoDeEvento, data, hora, local, organizador, preco } = req.body;
    const novoEvento = new Event(idEvento, titulo, descricao, tipoDeEvento, data, hora, local, organizador, preco);
    eventos.push(novoEvento);
    res.status(201).json(novoEvento);
});

app.post('/usuarios', (req, res) => {
    const { idUsuario, nome, email, senha } = req.body;
    const novoUsuario = new User(idUsuario, nome, email, senha);
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.get('/eventos', (req, res) => {
    res.json(eventos);
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
