// DeletedUsers.js
const mongoose = require('mongoose');

const DeletedUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // Add other fields as needed, similar to UserModel
    eid:{
        type:String,
        required:true,
        maxlength: 4,
        minlength: 4
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
    },

    dob: {
        type: Date,
        required: true
      },  
    deletedAt: {
        type: Date,
        default: Date.now
    }
});

const DeletedUserModel = mongoose.model('deleted_users', DeletedUserSchema);
module.exports = DeletedUserModel;
