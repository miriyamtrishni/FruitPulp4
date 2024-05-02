const mongoose = require('mongoose')

const MachineSchema = new mongoose.Schema({
    namel:{
        type:String,
        required:true
    },

    codel:{
        type:String,
        required:true,
        maxlength: 3,
        minlength: 3
    },

    datel:{
        type:Date,
        required:true
    },
    returndate:{
        type:Date,
        required:true
    },

    pricel:{
        type:Number,
        required:true
    },

    statusl:{
        type:String,
        required:true
    },

   

})

const  MachineUserModel = mongoose.model("machines", MachineSchema)
module.exports=  MachineUserModel