const mongoose = require('mongoose')

const UserSchemaM = new mongoose.Schema({
    code: {
        type:Number,
        maxlength: 3,
        minlength: 3,
        required:true
    },
    namem:{
        type:String,
        required:true
    },
    des:{
        type:String,

    },
    qty:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },

})

const UserModelm = mongoose.model("Stocks",UserSchemaM)
module.exports= UserModelm