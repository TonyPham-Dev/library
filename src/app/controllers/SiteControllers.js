
const Course = require('../models/Course')
const {utilMongooseObject} = require('../../util/mongoose')
class SiteController {
    
    // [GET] /
    index(req, res,next) {
        // courses
        Course.find({})
            .then((Courses) => {
                res.render('home',{
                    Courses: utilMongooseObject(Courses)
                })
            })
            .catch((err) => next(err))
     
    }

    // [GET] /search

    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController