const express = require('express')
const app = express()
require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
    res.render('Home')
})


app.get('*', (req, res) => {
    res.render('error404')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log (`listening on port ${PORT}`))
