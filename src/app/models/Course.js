const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, default: 'Course', maxLength:20},
    description: {type: String, default: 'Course description', maxLength:255},
    image: {type: String, default: 'Image', maxLength:255},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},

});

module.exports = mongoose.model('Course', Course);