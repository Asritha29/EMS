const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    empId: {
        type: String,
        required: true, 
        unique: true 
    },
    role: { 
        type: String,
        required: true,
        enum: ['user', 'admin', 'hr', 'manager'], 
        default: 'user'
    },
    fullname: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    quote: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true,
    }
}, { collection: 'user-data' });

const UserModel = mongoose.model('UserData', UserSchema);

module.exports = UserModel;
