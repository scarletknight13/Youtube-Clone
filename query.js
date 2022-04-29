require('./config/db.connection.js');

// require our model
const Video = require('./models/Video.js');

Video.find({}, // not passing in a filter in this case, but you can!!
    (err, allvideos) => {
        if (err) {
            console.log(err)
        } 
        else {
            allvideos.forEach(element => {
                console.log(element.comments);
            });
        }
    }
)