const Shift = require('../../../Models/HRMS/Attendance/shifts.js');

exports.delete_shift = async (req, res, next) => {
    try {

      const shift_id = req.params.shift_id; 
      const shift = await Shift.findByPk(shift_id);
  
      if (!shift) {
        res.send("Shift not found");
      } 
      else {
        
        const shift = await shift.destroy();
        res.json(shift);
      }

    } catch (error) {
      next(error);
    }
  };
  
  