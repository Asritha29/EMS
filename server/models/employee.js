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
       
      },
      dob:{
        type: Date,
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
      address:{
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
        required: true,
        unique: true,
      },
      doj:{
        type: Date,
        required: true
      },
      type:{
        type: String,
        required: true
      },
      team:{
        type: String,
      
      },
      status:{
        type: String,
        default:'Active' 
       
      },
      managerName:{
        type: String,
     
      },
      ismanager:{
       type: Boolean
      
      },
      designation:{
        type: String,
       
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
      lpa:{
        type: String,

      },
      salary:{
        type: String,
        required: true
      },
      basic:{
        type: String,
        required: true
      },
      hra:{
        type: String,
        required: true
      },
      ca:{
        type: String,
        required: true
      },
      other:{
        type: String,
     
      },
      pf:{
        type: String,
       
      },
      tax:{
        type: String,
        required: true
      },
      esi:{
        type: String,
       
      },
      tds:{
        type: String,
       
      },
      insurance:{
        type: String,
   
      },
      loan:{
        type: String,
 
      },
      bankName:{
        type: String,
        required: true
      },
      accNo:{
        type: String,
        required: true
      },
      uanNumber:{
        type: String,
        
      },
      ifscNumber:{
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