const express = require('express')
const hrms_shifts_router = express.Router()
const check_user = require('../../Middleware/check_user.js') 

const add_shifts = require('../../Controllers/HRMS/Shifts/add_shifts.js')
const delete_shift = require('../../Controllers/HRMS/Shifts/delete_shift.js')
const show_shifts = require('../../Controllers/HRMS/Shifts/show_shifts.js')
const update_shifts = require('../../Controllers/HRMS/Shifts/update_shifts.js')


hrms_shifts_router.use('/add-shifts', check_user)
hrms_shifts_router.use('/delete-shifts/:shift_id/',check_user)
hrms_shifts_router.use('/update-shifts/:shift_id', check_user)


hrms_shifts_router.post('/add-shifts', add_shifts.add_shifts)
hrms_shifts_router.post('/delete-shifts/:shift_id', delete_shift.delete_shift)
hrms_shifts_router.get('/show-shifts', show_shifts.show_shifts)
hrms_shifts_router.post('/update-shifts/:shift_id', update_shifts.update_shifts)

module.exports = hrms_shifts_router; 