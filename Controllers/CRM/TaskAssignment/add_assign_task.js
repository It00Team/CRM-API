const TaskAssignment = require("../../../Models/CRM/TaskAssignment.js");
const User = require("../../../Models/Users/user.js"); // Import the User model

exports.add_assign_task = async (req, res, next) => {
  try {
    const { task_name, user_id, task_status, task_requirement, task_sop, review, assigned_to, task_deadline } = req.body;

    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      if (!assigned_to) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const newTask = await TaskAssignment.create({
        task_name: task_name,
        task_date: new Date(),
        task_status: task_status,
        task_requirement: task_requirement,
        task_sop: task_sop,
        review: review,
        assigned_to: assigned_to,
        assigned_by: authorised_user.id, 
        task_deadline : task_deadline
      });

      res.json(newTask);
    } else {
      res.status(403).send("You do not have permission for this.");
    }
  } catch (error) {
    next(error);
  }
};
