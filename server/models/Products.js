const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    fruittype:{
        type:String,
        required:true
    },

    manufacturedate:{
        type:Date,
        required:true,
        get: v => v.toLocaleDateString() 
        
    },

    expiredate:{
        type:Date,
        required:true,
        get: v => v.toLocaleDateString() 
       
    },

    quantity:{
        type:Number,
        required:true
    },

    price:{
        type:String,
        required:true
    },

   
   

})

                                                                        







const ProductModel = mongoose.model("products",ProductsSchema)
module.exports= ProductModel