const UserShift = require('../../../Models/HRMS/Attendance/user_shift.js');

exports.update_user_shift = async (req, res, next) => {
    try {
      const { shift_id } = req.body;
      const user_shift_id = req.params.user_shift_id; 
  
      const user_shift = await UserShift.findByPk(user_shift_id);
  
      if (!user_shift) {
        res.send("User is not assigned with a shift ");
      } else {
        
        user_shift.shift_id = shift_id;
        await user_shift.save();
        res.json(user_shift);
      }
    } catch (error) {
      next(error);
    }
  };
  
  