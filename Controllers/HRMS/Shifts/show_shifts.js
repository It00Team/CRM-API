const Shift = require('../../../Models/HRMS/Attendance/shifts.js')

exports.show_shifts = async(req, res, next)=>{
    try {
        
        const shifts = await Shift.findAll()
        res.json(shifts)

    } catch (error) {
        next(error)
    }
}
