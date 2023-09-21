const UserShift = require('../../../Models/HRMS/Attendance/shifts.js');

exports.delete_user_shift = async (req, res, next) => {
    try {

      const user_shift_id = req.params.user_shift_id; 
      const user_shift = await UserShift.findByPk(user_shift_id);
  
      if (!user_shift) {
        res.send("User Shift not found");
      } 
      else {
        
        const user_shift = await user_shift.destroy();
        res.json(user_shift);
      }

    } catch (error) {
      next(error);
    }
  };
  
  