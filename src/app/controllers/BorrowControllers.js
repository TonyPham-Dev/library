const borrowHbs = require('../../resources/views/borrow.hbs')
const Borrow = require('../models/Borrow')
const Books = require('../models/Books')
const {utilMongooseObject, MongooseObject} = require('../../util/mongoose')
class BorrowController {
 
    index(req, res,next) {
      
        // gọi tới db lấy db sách 
        Books.find({})
            .then((books) => {
                res.render('borrow',{
                    books: utilMongooseObject(books)
                })
            })
            .catch((err) => next(err))


        // test
       
    }
    search(req, res) {
        res.render('search')
    }
   
   async createBorrowBook (req, res) {
      
       const {  nameStudent, classStudent, studentCode,book, borrowDate , payDate } = req.body
     
       const borrow = new Borrow( {nameStudent, classStudent, studentCode,book, borrowDate , payDate })
       await borrow.save(); 
       res.render('borrow',{
        borrow
      }) 
      alert("mượn sách thành công")
    }
}
module.exports = new BorrowController