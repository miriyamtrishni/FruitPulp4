const mongoose = require('mongoose');

// Define schema for attendance
const attendanceSchema = new mongoose.Schema({

  eidd: {
    type:String,
        required:true,
        maxlength: 4,
        minlength: 4
  },

  weekone: {
    type: Number, 
    required: true,
    maxlength: 5,
    minlength: 5
  },


  weektwo: {
    type: Number, 
    required: true,
    maxlength: 5,
    minlength: 5
  },

  weekthree: {
    type: Number, 
    required: true,
    maxlength: 5,
    minlength: 5
  },

  weekfour: {
    type: Number, 
    required: true,
    maxlength: 5,
    minlength: 5
  },

  month: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  }
});



// Create model for attendance
const AttendanceModel = mongoose.model('attendance', attendanceSchema);

module.exports = AttendanceModel;
