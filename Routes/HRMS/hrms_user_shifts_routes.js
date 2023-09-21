const express = require('express')
const hrms_user_shifts_router = express.Router()

const check_user = require('../../Middleware/check_user.js') 
const add_user_shifts = require('../../Controllers/HRMS/UserShifts/add_user_shifts.js')
const delete_user_shifts = require('../../Controllers/HRMS/UserShifts/delete_user_shifts.js')
const show_user_shifts = require('../../Controllers/HRMS/UserShifts/show_user_shifts.js')
const update_user_shifts = require('../../Controllers/HRMS/UserShifts/update_user_shifts.js')
const get_one_user_shift  = require('../../Controllers/HRMS/UserShifts/get_one_user_shift.js')

hrms_user_shifts_router.use('/add-user-shifts', check_user)
hrms_user_shifts_router.use('/delete-user-shifts/:user_shift_id', check_user)
hrms_user_shifts_router.use('/update-user-shifts/:user_shift_id', check_user)


hrms_user_shifts_router.post('/add-user-shifts', add_user_shifts.add_user_shift)
hrms_user_shifts_router.post('/delete-user-shifts/:user_shift_id', delete_user_shifts.delete_user_shift)
hrms_user_shifts_router.put('/update-user-shifts/:user_shift_id', update_user_shifts.update_user_shift)
hrms_user_shifts_router.get('/show-user-shifts', show_user_shifts.show_user_shifts)
hrms_user_shifts_router.get('/get-one-user-shift/:user_shift_id', get_one_user_shift.get_one_user_shift)



module.exports = hrms_user_shifts_router;   