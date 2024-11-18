const express = require('express');
const mysql = require('mysql2');
require('dotenv').config()
const app = express()
app.use(express.json())

// Criar a conexão
const chubdatabase = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

})

// Conectar ao banco de dados
chubdatabase.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err)
    return;
  }
  console.log('Conectado ao banco de dados MySQL!')
});


module.exports = chubdatabase

