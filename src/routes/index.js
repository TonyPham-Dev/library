
const newRoute = require('./news')
const site = require('./site')
const tinTuc = require('./tintuc')
const books = require('./books')
const account = require('./account')
const borrow = require('./borrow')
const payBooks = require('./payBooks')
function router(app) {
      app.use('/news', newRoute)
      app.use('/tin-tuc', tinTuc)
      app.use('/borrow', borrow)
      app.use('/', account)
      app.use('/', site)
      app.use('/books', books)
      app.use('/payBooks', payBooks)
      app.use('/search', site)
}


module.exports = router
