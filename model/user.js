const mongoose = require('mongoose');
const {Schema} = mongoose;

const userScheme = Schema({
  email: {
    type: String,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Should be a valid email address!',
    ],
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {type: Date, required: true, default: Date.now},
});
module.exports = userScheme;