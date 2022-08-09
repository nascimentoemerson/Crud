const mongoose= require('mongoose');

function connect() {
    mongoose
        .connect('mongodb://localhost:27017/')
        .then(() => {
            console.log('Database Connected');
        })
        .catch((err) => {
            console.log("Error in database:", err)
        })
}

module.exports = connect;