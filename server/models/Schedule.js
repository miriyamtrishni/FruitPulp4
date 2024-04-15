const mongoose = require('mongoose')

const ScheduleSchema = new mongoose.Schema({
    fruittype:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true,
        
    },

   
    quantity:{
        type:Number,
        required:true
    },

    time:{
        type:String,
        required:true
    },

   
   

})

                                                                        







const ScheduleModel = mongoose.model("production_schedule",ScheduleSchema)
module.exports= ScheduleModel