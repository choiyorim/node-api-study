const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const boardSchema = require('../model/board');

module.exports = mongoose.model('board',boardSchema);