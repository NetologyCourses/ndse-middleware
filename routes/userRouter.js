const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    res.status(201)
    res.json(user)
})

module.exports = router