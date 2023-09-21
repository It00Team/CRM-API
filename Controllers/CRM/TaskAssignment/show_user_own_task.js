const TaskAssignment = require("../../../Models/CRM/TaskAssignment.js");
const User = require("../../../Models/Users/user.js"); // Import the User model

exports.show_users_task = async (req, res, next) => {
  try {
    const id = req.user.id;
    const task = await TaskAssignment.findAll({
      where: { assigned_to: id },
      include: [
        { model: User, as: "assignedTo" },
        { model: User, as: "assignedBy" },
      ],
    });

    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ status: "failed", message: "Task Not Found." });
    }
  } catch (error) {
    next(error);
  }
};



exports.get_user_created_target = async (req, res, next) => {
  try {
    const id = req.user.id;
    const task = await TaskAssignment.findAll({
      where: { assigned_by: id },
      include: [
        { model: User, as: "assignedTo" },
        { model: User, as: "assignedBy" },
      ],
    });

    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ status: "failed", message: "Task Not Found." });
    }
  } catch (error) {
    next(error);
  }
};