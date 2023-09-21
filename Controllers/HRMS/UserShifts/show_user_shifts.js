const UserShift = require('../../../Models/HRMS/Attendance/user_shift.js')
const User = require('../../../Models/Users/user.js')
const Shift = require('../../../Models/HRMS/Attendance/shifts.js')

exports.show_user_shifts = async(req, res, next)=>{
    try {
        const user_shifts = await UserShift.findAll({include: [User, Shift]})
        res.json(user_shifts)

    } catch (error) {
        next(error)
    }
}
