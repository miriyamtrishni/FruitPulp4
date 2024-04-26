const mongoose = require('mongoose')

const UserSchemaM = new mongoose.Schema({
    code: {
        type:String,

     },
    namem:{
        type:String,
        required:true
    },
    des:{
        type:String,

    },
    qty: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        default: 'kilogram' // Default unit is kilogram
    },
    type:{
        type:String,
        required:true
    },

})

const UserModelm = mongoose.model("Stocks",UserSchemaM)
module.exports= UserModelm