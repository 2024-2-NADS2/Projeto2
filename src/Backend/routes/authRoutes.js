const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router()

router.post('/entrar', login)

module.exports = router
