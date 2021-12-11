

class TinTucController {
    
    // [GET] /news
    index(req, res) {
        res.render('tin-tuc')
    }

    // [GET] /:slug

    news(req, res) {
        res.send('hello world')
    }

}

module.exports = new TinTucController