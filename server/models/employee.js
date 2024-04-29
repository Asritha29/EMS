// model employee
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
      },
      fatherName: {
        type: String,
        required: true
      },
      motherName:{
        type: String,
        required: true
      },
      dob:{
        type: String,
        required: true
      },
      gender:{
        type: String,
        required: true
      },
      maritalStatus:{
        type: String,
      
      },
      phoneNumber:{
        type: String,
        required: true
      },
      email:{
        type: String,
        unique: true,
        required: true
      },
     empImg:{
        type: String,
        
      },
      adress:{
        type: String,
        required: true
      },
      emgContact:{
        type: String,
        required: true
      },
      emgRelation:{
        type: String,
        required: true
      },
      emgNumber:{
        type: String,
        required: true
      },
      empId:{
        type: String,
        required: true
      },
      doj:{
        type: Date,
        required: true
      },
      deployement:{
        type: String,
        required: true
      },
      team:{
        type: String,
      
      },
      status:{
        type: String,
       
      },
      managerName:{
        type: String,
     
      },
      ismanager:{
       type: Boolean
      
      },
      designation:{
        type: String,
        required: true
      },
      country:{
        type: String,
        required: true
      },
      state:{
        type: String,
        required: true
      },
      district:{
        type: String,
        required: true
      },
      mandal:{
        type: String,
        required: true
      },
      village:{
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now()
      },
      updatedAt: {
        type: Date,
        default: Date.now()
      }
    });

const employee = mongoose.model('employee', employeeSchema);

module.exports = employee