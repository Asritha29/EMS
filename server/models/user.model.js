const mongoose = require('mongoose');


const User = new mongoose.Schema({

    email :{type: String , require:true},
    password:{type:String , require:true},
    quote:{type: String},
},
{ collection: 'user-data' });

const modle = mongoose.model('UserData',User);

module.exports = modle;