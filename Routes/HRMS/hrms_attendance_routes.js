// Himanshu bisen (11/08/23)

const express = require('express')
const hrms_attendance_router = express.Router()
const add_attendance = require('../../Controllers/HRMS/Attendance/add_attendance.js')


hrms_attendance_router.post('/add-attendance', add_attendance.add_attendance_check_in_time);
hrms_attendance_router.post('/update-attendance/:user_id', add_attendance.update_attendance_check_out_time);

module.exports = hrms_attendance_router; 