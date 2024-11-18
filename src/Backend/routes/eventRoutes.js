const express = require('express')
const router = express.Router()
const { getEventById, getBannerEvents, createEvent, deleteEvent, getEventsByTema, eventAccess, AllEventsFilter, getAllEventsWithStatus, getAllEvents, getEventStatus, approveEvent } = require('../controllers/eventController')
const { upload } = require('../config/multer')



// Deinição de rotas reerentes aos eventos
router.get('/banner-eventos', getBannerEvents)
router.get('/eventos/:id/status', getEventStatus)
router.get('/eventos', AllEventsFilter)
router.get('/eventos-status', getAllEventsWithStatus)
router.get('/eventos/:id', getEventById)
router.post('/eventos/:id', eventAccess)
router.post('/criar-evento', upload.single('imagem'), createEvent)
router.delete('/eventos/:eventId/deletar', deleteEvent)
router.patch('/eventos/:id/aprovar', approveEvent)

router.get('/:tema', getEventsByTema)



module.exports = router
