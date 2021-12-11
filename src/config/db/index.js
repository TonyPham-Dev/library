
const mongoose = require('mongoose'); 

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_course_dev');
        console.log('thanh cong')
    } catch (error) {
        console.log('error connecting')
    }
}

module.exports =  {connect} 
