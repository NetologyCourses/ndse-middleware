const express = require('express')
const BookRouter = require('./routes/bookRouter')
const UserRouter = require('./routes/userRouter')

const PORT = process.env.PORT || 3000
const HOSTNAME = '127.0.0.1'

const app = express()
app.use(express.json())

app.use('/api/books', BookRouter)
app.use('/api/user', UserRouter)

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server start on http://${HOSTNAME}:${PORT}/`)
});