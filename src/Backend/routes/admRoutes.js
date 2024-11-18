// routes/userRoutes.js
const express = require('express')
const router = express.Router()
const { getAllUsers, deleteUser, setVerifiedUser, setAdmin, setCommonUser } = require('../controllers/admControllers');

router.get('/adm-usuarios', getAllUsers)
router.delete('/adm-usuarios/:id', deleteUser)
router.put('/adm-usuarios/admin/:id', setAdmin)
router.put('/adm-usuarios/verificado/:id', setVerifiedUser)
router.put('/adm-usuarios/comum/:id', setCommonUser)

module.exports = router