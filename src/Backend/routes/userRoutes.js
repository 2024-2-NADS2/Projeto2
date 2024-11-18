const express = require('express');
const {userSignUp, getUserById, getEventCreatedByUser, saveEvent, verifySave, notifyUser, deleteFavoriteEvent, getSavedEvents, supportMessage} = require('../controllers/userController');
const router = express.Router();

router.post('/cadastro', userSignUp)
router.get('/perfil/:id', getUserById)
router.get('/perfil/eventos/:id', getEventCreatedByUser)
router.get('/perfil/eventos-salvos/:userId', getSavedEvents)


router.get('/notifications/:id', notifyUser)

router.post('/contato', supportMessage);

router.post('/eventos/:id/salvar', saveEvent)
router.delete('/eventos/:id/desfavoritar', deleteFavoriteEvent)
router.get('/eventos/:id/favorito/:userId', verifySave)


module.exports = router
