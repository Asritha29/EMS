// models/country.js
const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: String,
  code: String,
});

const country = mongoose.model('country', countrySchema);

module.exports = country
