const express = require('express')
const router = express.Router()

const store = require('../store/store')

router.post('/login', (req, res) => {
    const { user } = store
    res.status(201)
    res.json(user)
})

module.exports = router