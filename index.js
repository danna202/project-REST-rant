const express = require('express')
const app = express()
require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
    res.render('home')
})
// GET /places
app.get('/', (req, res) => {
    let places = [ {
        name: 'Joeys Pancake House',
        city: 'Maggie Valley',
        state: 'NC',
        cuisines: 'Breakfast food',
        pic: 'https://plus.unsplash.com/premium_photo-1663840277618-8eab17e124a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhbmNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }, {
        name: 'Southern Porch',
        city: 'Canton',
        state: 'NC',
        cuisines: 'Southern Comfort Food',
        pic: 'https://media.istockphoto.com/id/1301405497/photo/bbq-lollipop-chicken-wings-and-spicy-glazed-pork-ribs.jpg?b=1&s=170667a&w=0&k=20&c=XZ9qeqVsEJGCVnZLoypy3wGNC_4eEVSdLhX0-U4k1J8='
       }    ]
    res.render('places/index', { places })
})

app.get('*', (req, res) => {
    res.render('error404')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log (`listening on port ${PORT}`))
