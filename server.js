//Import modules here
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const controllers = require('./controllers')

//Define Global Variables here
const PORT = 4500;
require('./config/db.connection')


//Define Express Settings Here
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))


// Define Router Controllers here:
app.get('/', (req, res)=>{
    res.render('test.ejs')
})
// app.use('/', controllers.home);
app.use('/watch', controllers.watch);
app.use('/results', controllers.results);
// app.use('/channel', controllers.channel)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
