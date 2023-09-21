// himanshu bisen 13-08-2023

const TaskAssignment = require("../../../Models/CRM/TaskAssignment.js");

exports.delete_task = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const { id } = req.params;

      const task = await TaskAssignment.findByPk(id);

      if (task) {
        await task.destroy();
        res.json(task);
      } else {
        res.status(404).json({ status: "failed", message: "Task Not Found." });
      }
    }
  } catch (error) {
    next(error);
  }
};
