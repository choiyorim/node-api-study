const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const userSchema = require('../model/user');

module.exports = mongoose.model('user', userSchema);
