const mongoose = require('mongoose')

const SupplierdetailSchema = new mongoose.Schema({
    namesi:{
        type:String,
        required:true
    },

    sidsi:{
        type:String,
        required:true,
        maxlength: 4,
        minlength: 4
    },

    addressi:{
        type:String,
        required:true
    },

    emailsi:{
        type:String,
        required:true
    },

    contactsi:{
        type:Number,
        required:true,
        maxlength: 10,
        minlength: 10
    },

    

   

})

const SupplierdetailUserModel = mongoose.model("supplierdetails",SupplierdetailSchema)
module.exports=  SupplierdetailUserModel