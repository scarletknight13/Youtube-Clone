//Import modules here
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const controllers = require('./controllers')

//Define Global Variables here
const port = process.env.PORT || 4500;
require('./config/db.connection')


//Define Express Settings Here
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

app.use('/', controllers.home);
app.use('/watch', controllers.watch);
app.use('/results', controllers.results);
// app.use('/channel', controllers.channel)

app.listen(port || 4500, () => console.log(`Live Server at :${port}`))
