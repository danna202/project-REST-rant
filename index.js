const express = require('express')
const app = express()
require('dotenv').config()

app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log (`listening on port ${PORT}`))
