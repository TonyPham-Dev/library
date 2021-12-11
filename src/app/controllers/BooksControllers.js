
const books = require('../models/Books')
const {utilMongooseObject} = require('../../util/mongoose')
class BooksController {
 
    index(req, res,next) {
        // books
        books.find({})
            .then((book) => {
                res.render('books',{
                    book: utilMongooseObject(book)
                })
            })
            .catch((err) => next(err))
    }
    search(req, res) {
        res.render('search')
    }
}
module.exports = new BooksController