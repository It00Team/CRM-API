// himanshu bisen 13-08-2023
const TargetAssignment = require("../../../Models/CRM/TargetAssignment.js");

exports.add_target_assignment = async (req, res, next) => {
  try {
    const authorised_user = req.user;
    if (authorised_user.designation === "team_leader" || authorised_user.designation === "super_admin" || authorised_user.designation === "admin") {
      const { target_name, target_date, assigned_to, assigned_by, project_id, target_deadline, team_id, target_status } =
        req.body;

      const newTarget = await TargetAssignment.create({
        target_name: target_name,
        target_date: target_date,
        target_deadline: target_deadline,
        assigned_to: assigned_to,
        assigned_by : assigned_by,
        project_id: project_id,
        team_id : team_id,
        target_status : target_status
      });

      res.status(201).json(newTarget);
    }
  } catch (error) {
    next(error);
  }
};
