const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteControllers')


router.get('/search', siteController.search)
router.get('/home', siteController.index) //get

module.exports = router