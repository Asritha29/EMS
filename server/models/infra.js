const mongoose = require('mongoose');

const infraSchema = new mongoose.Schema({
  organization: String,
  code: String,
});

const infra = mongoose.model('infra', infraSchema);

module.exports = infra