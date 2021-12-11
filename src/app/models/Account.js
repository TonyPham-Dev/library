const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    userName: {Number},
    password: {String}
});

module.exports = mongoose.model('Account', Account);