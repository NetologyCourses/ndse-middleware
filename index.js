const express = require('express')
const BookRouter = require('./routes/bookRouter')
const UserRouter = require('./routes/userRouter')

const app = express()
app.use(express.json())

app.use('/api/books', BookRouter)
app.use('/api/user', UserRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT);