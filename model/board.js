const mongoose = require('mongoose');
const {Schema} = mongoose;

const boardScheme = Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdAt: {type: Date, required: true, default: Date.now},
});
module.exports = boardScheme;