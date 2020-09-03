const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;
const employeeroute = require('./route/employee-route')
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/employeecollection', { useNewUrlParser: true ,
useUnifiedTopology:true,
useFindAndModify:true}).then(
    () => { 
        console.log('Database is Connected')
    },
    err => {
        console.log('Can not connect to the database'+ err)
    }
);

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/employee',employeeroute)

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });