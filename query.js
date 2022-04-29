require('./config/db.connection.js');

// require our model
const Comment = require('./models/Comment.js');

Comment.find({}, // not passing in a filter in this case, but you can!!
    (err, allvideos) => {
        if (err) {
            console.log(err)
        } 
        else {
            allvideos.forEach(element => {
                element.populate('replies')
                console.log(element._id);
            });
        }
    }
)