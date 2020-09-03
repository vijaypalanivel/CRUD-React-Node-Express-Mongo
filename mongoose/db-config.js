const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Employee', { useNewUrlParser: true }).then(
    () => { 
        console.log('Database is Connected')
    },
    err => {
        console.log('Can not connect to the database'+ err)
    }
);