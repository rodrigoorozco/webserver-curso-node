const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//get port
const port = process.env.PORT | 3000;


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/data', (req, res) => {
    res.send(`Hola data`);
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})