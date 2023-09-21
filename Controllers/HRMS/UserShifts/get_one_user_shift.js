const UserShift = require('../../../Models/HRMS/Attendance/user_shift.js')
const User = require('../../../Models/Users/user.js')
const Shift = require('../../../Models/HRMS/Attendance/shifts.js')

exports.get_one_user_shift = async(req, res, next)=>{
    try {
        const id = req.params.user_shift_id;
        const user_shift = await UserShift.findByPk(id, {include: [User, Shift]})
        res.json(user_shift)

    } catch (error) {
        next(error)
    }
}
