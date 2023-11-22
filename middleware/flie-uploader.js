const multer = require('multer')

const store = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, `upload/books`)
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

module.exports = multer({ store })
