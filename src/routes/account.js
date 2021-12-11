const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const accountController = require('../app/controllers/AccountControllers')

router.get('/', accountController.index)
router.post('/home', accountController.login) // post
module.exports = router