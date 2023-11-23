const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

const Book = require('../models/Book')
const fileUploader = require('../middleware/fileUploader')
const store = require('../store/store')

/**
 * Get all books
 */
router.get('/', (req, res) => {
    const { books } = store
    res.json(books)
})

/**
 * Get one book
 */
router.get('/:id', (req, res) => {
    const { books } = store
    const { id } = req.params
    const bookIndex = books.findIndex(book => book.id === id)

    if (bookIndex !== -1) {
        res.json(books[bookIndex])
    }
    else {
        res.status(404)
        res.json({ errorCode: 404, errorMessage: `Книги с идентификатором ${id} не найдено` })
    }
})

/**
 * Add new book
 */
router.post('/', fileUploader.single('fileBook'), (req, res) => {
    const { books } = store
    const { title, description, authors, favorite, fileCover, fileName } = req.body
    console.log('req.file >>> ', req.file)
    const fileBook = req.file.path;

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName, fileBook)
    books.push(newBook)

    res.status(201)
    res.json(newBook)
})

/**
 * Update book
 */
router.put('/:id', fileUploader.single('fileBook'), (req, res) => {
    const { books } = store
    const { title, description, authors, favorite, fileCover, fileName } = req.body
    const { id } = req.params
    const fileBook = req.file.path;
    const bookIndex = books.findIndex(book => book.id === id)

    if (bookIndex !== -1) {
        books[bookIndex] = {
            ...books[bookIndex],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName,
            fileBook
        }

        res.json(books[bookIndex])
    }
    else {
        res.status(404)
        res.json({ errorCode: 404, errorMessage: `Книги с идентификатором ${id} не найдено` })
    }
})

/**
 * Remove book
 */
router.delete('/:id', (req, res) => {
    const { books } = store
    const { id } = req.params
    const bookIndex = books.findIndex(book => book.id === id)

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1)
        res.json('ok')
    }
    else {
        res.status(404)
        res.json({ errorCode: 404, errorMessage: `Книги с идентификатором ${id} не найдено` })
    }
})

module.exports = router