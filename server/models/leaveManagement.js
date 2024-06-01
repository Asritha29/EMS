const mongoose = require('mongoose');

const managementSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  totalLeaves: { type: Number, default: 0 },
  leavesTaken: { type: Number, default: 0 },
  lop: { type: Number, default: 0 }
});

module.exports = mongoose.model('management', managementSchema);
