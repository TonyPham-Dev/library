const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const { index } = require('./app/controllers/NewsControllers')
var methodOverride = require('method-override')

const db = require('./config/db')
db.connect()

const app = express()
const port = 3001

// app.post('/', (req,res,next) => {
//   const username = req.body.username
//   const password = req.body.password

  
// })
const route = require('./routes')
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json())

app.engine('hbs', handlebars({
  extname: ".hbs"
}));



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})