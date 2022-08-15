const { connect } = require('mongoose');

function mongoConnect() {
    connect('mongodb://localhost:27017/')
        .then(() => {
            console.log('Database Connected');
        })
        .catch(err => {
            console.log('Error in database:', err);
        });
}

module.exports = {mongoConnect};
