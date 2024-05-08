const mongoose = require('mongoose');

const electricalSchema = new mongoose.Schema({
  organization: String,
  code: String,
});

const electrical = mongoose.model('electrical', electricalSchema);

module.exports = electrical