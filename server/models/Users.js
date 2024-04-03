const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    eid:{
        type:String,
        required:true,
        maxlength: 3,
        minlength: 3
    },

    nic:{
        type:String,
        required:true,
        maxlength: 12,
        minlength: 12
    },

    gender:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    address:{
        type:String,
        required:true
    },

   

    email:{
        type:String,
        required:true
    },

    jobtitle:{
        type:String,
        required:true
    },

    salary:{
        type:Number,
        required:true
    }

   

})

const UserModel = mongoose.model("users",UserSchema)
module.exports= UserModel