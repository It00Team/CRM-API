const UserShift = require("../../../Models/HRMS/Attendance/user_shift.js");


// exports.add_user_shift = async (req, res, next) => {
//   try {
//     const { user_id, shift_id} = req.body;
//     const shift = await UserShift.findOne({ where: { user_id: user_id, shift_id: shift_id}});

//     if (shift) {
//       res.send("This Shift already exists");
//     } 
//     else {
//       const value = await UserShift.create({ user_id: user_id, shift_id: shift_id });
//       res.json(value);
//     }
//   } catch (error) {
//     next(error);
//   }
// };


exports.add_user_shift = async (req, res, next) => {
  const { shift_id, user_ids } = req.body;
  try {
    const userShifts = await Promise.all(
      user_ids.map((user_id) => {
        return UserShift.create({ shift_id, user_id });
      })
    );

    res.status(201).json(userShifts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to assign shifts" });
  }
};