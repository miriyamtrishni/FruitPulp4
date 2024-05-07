const mongoose = require('mongoose')

const UserSchemaSM = new mongoose.Schema({
    code: {
        type:String,

    },

    date: {
        type: Date,
        required: true,
        get: v => v.toLocaleDateString()
    },
    mqty:{
        type: Number,
        required: true

    },
    cqty: {
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

const UserModelsm = mongoose.model("stocksM",UserSchemaSM)
module.exports= UserModelsm