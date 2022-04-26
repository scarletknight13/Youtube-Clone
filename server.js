const express = require('express');

const app = express();

const methodOverride = require('method-override')

const controllers = require('./controllers')

const PORT = 4500;

require('./config/db.connection')

app.set('view engine', 'ejs')

app.use(express.static('public'))


app.use(methodOverride('_method'))


app.use(express.urlencoded({ extended: false }))

app.get('/', (request, response) => response.send('Server is up and running'))


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))