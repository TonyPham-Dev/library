const express = require('express')
const router = express.Router()
const BorrowController = require('../app/controllers/BorrowControllers')


router.get('/', BorrowController.index)
router.get('/search', BorrowController.search)

router.post('/', BorrowController.createBorrowBook)

module.exports = router