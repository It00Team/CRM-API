const moment = require('moment-timezone');
const Attendance = require('../../../Models/HRMS/Attendance/attendance.js')
const User = require('../../../Models/Users/user.js');
// Create a new attendance record
exports.add_attendance_check_in_time = async (req, res, next) => {
  try {
    // Extract the necessary data from the request body
    const { date, status, user_id, shift_id, user_shift_id } = req.body;

    const indiaTime = moment.tz('Asia/Kolkata'); // Get current time in Indian time zone

    const user = User.findOne({where : {id : user_id}});
    // user.check_in_time 

    if (user.status === false) {
      user.check_in_time = indiaTime.toDate(); 
      user.status = true;// Convert moment to JavaScript Date
    }
    user.check_out_time = null;
    user.total_hours = null;
   

    // Create a new attendance record using the Attendance model
    const newAttendance = await Attendance.create({
      date: date,
      status: status,
      check_in_time: check_in_time,
      check_out_time: check_out_time,
      total_hours: total_hours,
      user_id: user_id,
      shift_id: shift_id,
      user_shift_id: user_shift_id,
    });

    // Respond with a success message and the created attendance record
    res.status(201).json({
      success: true,
      message: 'Attendance record created successfully',
      attendance: newAttendance,
    });
  } catch (error) {
    
    console.error('Error adding attendance:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding attendance',
      error: error.message,
    });
  }
};

// Update the check_out_time for an existing attendance record
exports.update_attendance_check_out_time = async (req, res) => {
  try {
    const { user_id } = req.params;

    const user = User.findOne({where : {id : user_id}}); 

    const indiaTime = moment.tz('Asia/Kolkata'); 

    if (user.status === true && user.check_out_time === null) {
      user.check_out_time = indiaTime.toDate(); 
      if (user.check_in_time) {
        const timeDifference = user.check_out_time - user.check_in_time;
        user.total_hours = timeDifference / (1000 * 60 * 60); 
      }
      
      await user.save();

      const newAttendance = await Attendance.create({
        date: user.date, 
        status: user.status, 
        check_in_time: user.check_in_time,
        check_out_time: user.check_out_time,
        total_hours: user.total_hours,
        user_id: user_id,
        shift_id: user.shift_id,
        user_shift_id: user.user_shift_id,
      });

      res.status(201).json({
        success: true,
        message: 'Attendance record updated successfully',
        attendance: newAttendance,
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Attendance update not allowed',
      });
    }
  } catch (error) {
    console.error('Error updating attendance:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating attendance',
      error: error.message,
    });
  }
};

