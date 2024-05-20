const mongoose = require('mongoose');


const User = new mongoose.Schema({

    email :{type: String , require:true, unique:true},
    empId: {type: String, required: true, unique: true },
    role: { type: String,  required: true, enum: ['user', 'admin','hr', 'manager'], default: 'user'},
    fullname: { type: String,  required: true},
    password:{type:String , require:true},
    quote:{type: String},
},
{ collection: 'user-data' });

const modle = mongoose.model('UserData',User);

module.exports = modle; 