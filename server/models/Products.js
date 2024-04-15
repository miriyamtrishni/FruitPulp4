const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    fruittype:{
        type:String,
        required:true
    },

    manufacturedate:{
        type:Date,
        required:true,
        
    },

    expiredate:{
        type:Date,
        required:true,
       
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