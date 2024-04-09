const mongoose = require('mongoose');

// Define schema for attendance
const attendanceSchema = new mongoose.Schema({

  eidd: {
    type:String,
        required:true,
        maxlength: 3,
        minlength: 3
  },

  weekone: {
    type: Number, // Array of numbers representing attendance for each day
    required: true,
    maxlength: 5,
    minlength: 1
  },


  weektwo: {
    type: Number, // Array of numbers representing attendance for each day
    required: true,
    maxlength: 5,
    minlength: 1
  },

  weekthree: {
    type: Number, // Array of numbers representing attendance for each day
    required: true,
    maxlength: 5,
    minlength: 1
  },

  weekfour: {
    type: Number, // Array of numbers representing attendance for each day
    required: true,
    maxlength: 5,
    minlength: 1
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
