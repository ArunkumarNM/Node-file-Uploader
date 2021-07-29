const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    filename:{
        type:String,
        unique:true,
        required:true
    },
    contentType:{
        type:String,required:true
    },
    imageBase64:{
        type:String,
        required:true
    }
})

module.exports = UploadeModel = mongoose.model('uploads',uploadSchema);