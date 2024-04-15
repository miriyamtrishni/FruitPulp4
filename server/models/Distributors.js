const mongoose = require('mongoose')

const DistributorSchema = new mongoose.Schema({
    named:{
        type:String,
        required:true
    },

    did:{
        type:String,
        required:true,
        maxlength: 3,
        minlength: 3
    },
    addressd:{
        type:String,
        required:true
    },
    materiald:{
        type:String,
        required:true
    },

    dated:{
        type:Date,
        required:true
    },
   

    quantityd:{
        type:Number,
        required:true
    },

    statusd:{
        type:String,
        required:true
    },

   

})

const  DistributorUserModel = mongoose.model("distributors", DistributorSchema)
module.exports=  DistributorUserModel