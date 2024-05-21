const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    empId:{
        type: String,
        required: true,
    },
    lsd:{
        type: String,
        required: true,
    },
    led:{
        type: String,
        required: true,
    },
    reason:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
        default: 'Pending'
    },
    approvers: [
        { role: String, 
          approved: { type: Boolean, default: false } 
        } // roles: 'hr', 'Manager'
    ]

    
});


const LeaveRequest = mongoose.model('leaveRequest',leaveRequestSchema);

module.exports = LeaveRequest;