const mongoose = require('mongoose')

const BatchesSchema = new mongoose.Schema({
    fruittype:{
        type:String,
        required:true
    },

    manufacturedate:{
        type:Date,
        required:true,
        get: v => v.toLocaleDateString() 
        
    },

    

    quantity:{
        type:Number,
        required:true
    },

   

   
   

})


const BatchModel = mongoose.model("batches",BatchesSchema)
module.exports= BatchModel