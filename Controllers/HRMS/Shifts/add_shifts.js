const Shift = require("../../../Models/HRMS/Attendance/shifts.js");
const moment = require("moment");


exports.add_shifts = async (req, res, next) => {
  try {
    const { shift_name, start_time, end_time} = req.body;

    const startTimeMoment = moment(start_time, "HH:mm");
    const endTimeMoment = moment(end_time, "HH:mm");

    const durationInMinutes = endTimeMoment.diff(startTimeMoment, "minutes");
    const durationInHours = durationInMinutes / 60;

    // console.log(`Duration in minutes: ${durationInMinutes}`);
    console.log(`Duration in hours: ${durationInHours}`);

    const shift = await Shift.findOne({ where: {  shift_name: shift_name, start_time: start_time,  end_time: end_time }});

    if (shift) {
      res.send("This Shift already exists");
    } 
    else {
      const value = await Shift.create({ shift_name: shift_name, start_time: start_time, end_time: end_time, duration : durationInHours });
      res.json(value);
    }
  } catch (error) {
    next(error);
  }
};

