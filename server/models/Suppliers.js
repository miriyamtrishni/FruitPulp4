const mongoose = require('mongoose')

const SupplierSchema = new mongoose.Schema({
    names:{
        type:String,
        required:true
    },

    sid:{
        type:String,
        required:true,
        maxlength: 4,
        minlength: 4
    },

    materialname:{
        type:String,
        required:true
    },

    quantitiy:{
        type:Number,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    date: {
        type: Date,
        required: true,
        get: v => v.toLocaleDateString() 
    }

   

})

const SupplierUserModel = mongoose.model("suppliers",SupplierSchema)
module.exports= SupplierUserModel