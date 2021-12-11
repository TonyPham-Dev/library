const express = require('express')
const router = express.Router()
const tinTucController = require('../app/controllers/TinTucControllers')


router.get('/:slug', tinTucController.news)
router.get('/', tinTucController.index)

module.exports = router