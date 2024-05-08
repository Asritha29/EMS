const mongoose = require('mongoose');

const manpowerSchema = new mongoose.Schema({
  organization: String,
  code: String,
});

const manpower = mongoose.model('manpower', manpowerSchema);

module.exports = manpower