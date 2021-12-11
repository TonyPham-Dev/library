const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PayBooks = new Schema({
    name: {type: String, default: 'PayBooks', maxLength:20},
    image: {type: String, default: 'Image', maxLength:255},
});

module.exports = mongoose.model('PayBooks', PayBooks);