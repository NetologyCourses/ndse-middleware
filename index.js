const express = require('express')
const BookRouter = require('./routes/bookRouter')
const UserRouter = require('./routes/userRouter')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use('/api/books', BookRouter)
app.use('/api/user', UserRouter)

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
});