const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Books = new Schema({
    name: {type: String, default: 'Books', maxLength:20},
    image: {type: String, default: 'Image', maxLength:255},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},

});

module.exports = mongoose.model('Books', Books);