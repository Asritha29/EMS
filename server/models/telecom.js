const mongoose = require('mongoose');

const telecomSchema = new mongoose.Schema({
  organization: String,
  code: String,
});

const telecom = mongoose.model('telecom', telecomSchema);

module.exports = telecom