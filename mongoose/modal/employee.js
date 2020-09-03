const mongoose = require('mongoose');

console.log('Index started family');

const schema = mongoose.Schema
const employee =  new schema({
    FName: {type:String},
    LName : {type:String},
    UName : {type:String}
})

module.exports = mongoose.model('Employee', employee);

