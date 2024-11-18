const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/authRoutes')
const eventRoutes = require('./routes/eventRoutes')
const userRoutes = require('./routes/userRoutes')
const admRoutes = require('./routes/admRoutes.js')
const PORT = process.env.PORT || 3001
app.use(express.json())
app.use(cors())


app.use('/api', admRoutes)
app.use('/api', eventRoutes)
app.use('/api', userRoutes)
app.use('/api', authRoutes)


app.listen(PORT, () => {
    console.log(`Servidor rodando ${PORT}`)
})
