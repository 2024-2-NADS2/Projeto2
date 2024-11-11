const multer = require('multer')
const upload = multer({
    storage: multer.memoryStorage()
})

exports.upload = upload
