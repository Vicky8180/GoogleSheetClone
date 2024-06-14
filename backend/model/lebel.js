
const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  targetDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Entry', EntrySchema);
