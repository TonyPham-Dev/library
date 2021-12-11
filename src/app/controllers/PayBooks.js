
const pay = require('../models/PayBooks')
const {utilMongooseObject} = require('../../util/mongoose')
const Borrow = require('../models/Borrow')


class PayBooksController {
    
    
   async index(req, res,next) {
      const borrows =  await Borrow.find().populate('book').lean();
   
      res.render('payBooks',{
        borrows 
      }) 
    }
    search(req, res) {
        res.render('search')
    }
    // delete pay books
    delete(req, res,next) {
      Borrow.deleteOne({ _id: req.params.id })
        .then(() => {
            res.redirect('back')
        })
        .catch(next)
    }
}
module.exports = new PayBooksController