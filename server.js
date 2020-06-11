const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpres');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'fer'
    })
})
app.get('/about', function(req, res) {
    res.render('about', {})
})

app.get('/salida', function(req, res) {
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }

    res.send(JSON.stringify(salida))
})

app.listen(port, () => {
    console.log('escuchando: ' + port);
});