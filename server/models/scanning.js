const mongoose = require('mongoose');

const scanningSchema = new mongoose.Schema({
  organization: String,
  code: String,
});

const scanning = mongoose.model('scanning', scanningSchema);

module.exports = scanning