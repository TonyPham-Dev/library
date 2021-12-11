const express = require('express')
const router = express.Router()
const PayBooksController = require('../app/controllers/PayBooks')


router.get('/', PayBooksController.index)
router.get('/search', PayBooksController.search)
router.delete('/:id', PayBooksController.delete) // delete

module.exports = router