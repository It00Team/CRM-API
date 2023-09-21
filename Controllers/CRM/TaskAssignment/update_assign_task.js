const TaskAssignment = require("../../../Models/CRM/TaskAssignment.js");

exports.update_task_assignment = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const id = req.params.id;
      const {
        task_name,
        task_deadline,
        task_status,
        assigned_to,
        task_requirement,
        task_sop,
        review,
      } = req.body;

      const existingTaskAssignment = await TaskAssignment.findByPk(id)
      if (!existingTaskAssignment) {
        res.status(404).json({ message: "Task Assignment not found" });
        return;
       
      }

      // Conditionally update properties if they are defined in the request body
      if (task_name !== undefined) {
        existingTaskAssignment.task_name = task_name;
      }

      if (task_deadline !== undefined) {
        existingTaskAssignment.task_deadline = task_deadline;
      }

      if (task_status !== undefined) {
        existingTaskAssignment.task_status = task_status;
      }

      if (assigned_to !== undefined) {
        existingTaskAssignment.assigned_to = assigned_to;
      }

      if (task_requirement !== undefined) {
        existingTaskAssignment.task_requirement = task_requirement;
      }

      if (task_sop !== undefined) {
        existingTaskAssignment.task_sop = task_sop;
      }

      if (review !== undefined) {
        existingTaskAssignment.review = review;
      }

      await existingTaskAssignment.save();

      res.status(200).json(existingTaskAssignment);
    } else {
      res.status(403).json({ message: "You do not have permission for this." });
    }
  } catch (error) {
    next(error);
  }
};
