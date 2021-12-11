const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Borrow = new Schema({
    nameStudent : {type: String, default: 'Borrow', maxLength:20},
    classStudent : { type : String, require : true },
    studentCode : { type : String, require : true },
    book : { type : mongoose.Types.ObjectId, ref : "Books" }, // 
    borrowDate : { type : String},
    payDate : { type : String, require : true},
    createAt: {type: Date, default: Date.now},
    image: {type: String, default: 'Image', maxLength:255},
},{ 
    timestamps : true  //  ghi lại đc thời gian tạo document, thời gian update
 });


module.exports = mongoose.model('Borrow', Borrow);