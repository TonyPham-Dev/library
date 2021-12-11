

class NewsController {
    
    // [GET] /news
    index(req, res) {
        res.render('search')
    }

    // [GET] /:slug

    show(req, res) {
        res.send('hello world')
    }

}

module.exports = new NewsController