const Shift = require('../../../Models/HRMS/Attendance/shifts.js');
const moment = require("moment");


// not added code for is_active field in shift model
exports.update_shifts = async (req, res, next) => {
    try {
      const { shift_name, start_time, end_time } = req.body;
      const shift_id = req.params.shift_id; // Retrieve shift_id from req.params
  
      const startTimeMoment = moment(start_time, "HH:mm");
      const endTimeMoment = moment(end_time, "HH:mm");
  
      const durationInMinutes = endTimeMoment.diff(startTimeMoment, "minutes");
      const durationInHours = durationInMinutes / 60;
  
      const shift = await Shift.findByPk(shift_id);
  
      if (!shift) {
        res.send("Shift not found");
      } else {
        
        shift.shift_name = shift_name;
        shift.start_time = start_time;
        shift.end_time = end_time;
        shift.duration = durationInHours;
  
        await shift.save();
        res.json(shift);
      }
    } catch (error) {
      next(error);
    }
  };
  
  