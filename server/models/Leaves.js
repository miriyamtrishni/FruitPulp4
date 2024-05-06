const mongoose = require('mongoose');


const leaveSchema = new mongoose.Schema({

  eid3: {
    type:String,
        required:true,
        maxlength: 4,
        minlength: 4
  },

  leavetype: {
    type: String, 
    required: true,
    
  },
  leavepay: {
    type: String, 
    required: true,
    
  },

  approve: {
    type: String, 
    required: true,
    
  },



  monthh: {
    type: String,
    required: true
  },

  datee: {
    type: Date,
    required: true
  }
  
});




const LeaveModel = mongoose.model('leave', leaveSchema);

module.exports = LeaveModel;