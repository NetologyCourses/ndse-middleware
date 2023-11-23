const express = require('express')
const router = express.Router()

const Store = require('../store/store')
const { user } = Store
console.log('Store >>> ', Store)

router.post('/login', (req, res) => {
    const { body } = req
    console.log('req body >>> ', body)
    res.status(201)
    res.json(user)
})

module.exports = router