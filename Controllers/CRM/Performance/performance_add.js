const Performance = require("../../../Models/CRM/Performance.js");
const { Op } = require("sequelize");
const User = require("../../../Models/Users/user.js");

exports.performance_add = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    const { hours_worked } = req.body;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    const prev_performance = await Performance.findOne({
      where: { user_id: authorised_user.id, date: formattedDate },
    });

    if (prev_performance) {
      console.log("start");
      console.log(prev_performance.dataValues.hours_worked);

      const [hours1, minutes1, seconds1] =
        prev_performance.dataValues.hours_worked.split(":").map(Number);
      const [hours2, minutes2, seconds2] = hours_worked.split(":").map(Number);

      let totalSeconds = seconds1 + seconds2;
      let carryMinutes = Math.floor(totalSeconds / 60);
      totalSeconds %= 60;

      let totalMinutes = minutes1 + minutes2 + carryMinutes;
      let carryHours = Math.floor(totalMinutes / 60);
      totalMinutes %= 60;

      let totalHours = hours1 + hours2 + carryHours;

      const pad = (num) => num.toString().padStart(2, "0");

      const resultTimeString = `${pad(totalHours)}:${pad(totalMinutes)}:${pad(
        totalSeconds
      )}`;
      console.log(resultTimeString);

      prev_performance.hours_worked = resultTimeString;
      await prev_performance.save();
      res.send(prev_performance);
    } else {
      const performance = await Performance.create({
        date: new Date(),
        hours_worked: hours_worked,
        user_id: authorised_user.id,
      });
      console.log("end");

      res.send(performance);
    }
  } catch (error) {
    next(error);
  }
};

exports.show_performance = async (req, res, next) => {
  try {
    const authorised_user = req.user;
    const { date } = req.params;

    const performance = await Performance.findAll({
      where: {
        date: date,
      },
      include: [
        {
          model: User,
          attributes: ["username", "name"],
        },
      ],
    });

    console.log(performance);
    res.send(performance);
  } catch (error) {
    next(error);
  }
};

exports.show_performance_range = async (req, res, next) => {
  try {
    const authorised_user = req.user;
    const { date, end, user_id } = req.params; // Assuming you have startDate and endDate in req.params

    const performance = await Performance.findAll({
      where: {
        date: {
          [Op.gte]: date, // Greater than or equal to startDate
          [Op.lte]: end,   // Less than or equal to endDate
        },
      },
      include: [{
        model: User,
        where: { id: user_id },
        attributes: ['username', 'name'], 
      }],
    });

    function getCurrentFormattedDate(currentDate) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    }

    const dateArray = [];
    let currentDate = new Date(date); // get date array while looping from start date to end date
    while (currentDate <= new Date(end)) {
      dateArray.push(getCurrentFormattedDate(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const performanceMap = new Map(
      performance.map((item) => [item.date, item])
    );

    const finalPerformanceData = dateArray.map((date) => {
      const dateString = date;
      const existingRecord = performanceMap.get(dateString);

      return {
        username : existingRecord ? existingRecord.User.username : '',
        name : existingRecord ? existingRecord.User.name : '',
        user_id : existingRecord ? existingRecord.User.id : '',
        date: dateString,
        hours_worked: existingRecord ? existingRecord.hours_worked : 0,
      };
    });

    console.log(finalPerformanceData);
    res.send(finalPerformanceData);
  } catch (error) {
    next(error);
  }
};
