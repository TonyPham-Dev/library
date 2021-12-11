const express = require('express')
const router = express.Router()
const BooksController = require('../app/controllers/BooksControllers')


router.get('/search', BooksController.search)
router.get('/', BooksController.index)

module.exports = router