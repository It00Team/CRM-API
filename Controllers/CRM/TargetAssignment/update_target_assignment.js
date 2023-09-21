// Satyam Kumar (13/08/23) from home

const TargetAssignment = require("../../../Models/CRM/TargetAssignment");

exports.update_target_assignment = async (req, res, next) => {
  try {
    const authorised_user = req.user;
    if (authorised_user.designation === "team_leader" || authorised_user.designation === "super_admin" || authorised_user.designation === "admin") {
      const id = req.params.id;
      console.log(id)

      const {
        target_name,
        target_date,
        target_deadline,
        assigned_to,
        project_id,
        assigned_by,
        plan_id,
        team_id,
        target_status
      } = req.body;

      const existingTargetAssi = await TargetAssignment.findByPk(id)

      if (!existingTargetAssi) {
        return res.status(404).send("Target not found");
      }
  
      if (target_name !== undefined) {
        existingTargetAssi.target_name = target_name;
      }
  
      if (target_date !== undefined) {
        existingTargetAssi.target_date = target_date;
      }
  
      if (target_deadline !== undefined) {
        existingTargetAssi.target_deadline = target_deadline;
      }
  
      if (assigned_to !== undefined) {
        existingTargetAssi.assigned_to = assigned_to;
      }
  
      if (project_id !== undefined) {
        existingTargetAssi.project_id = project_id;
      }
  
      if (assigned_by !== undefined) {
        existingTargetAssi.assigned_by = assigned_by;
      }
  
      if (plan_id !== undefined) {
        existingTargetAssi.plan_id = plan_id;
      }
  
      if (team_id !== undefined) {
        existingTargetAssi.team_id = team_id;
      }
  
      if (target_status !== undefined) {
        existingTargetAssi.target_status = target_status;
      }
  
      const data = await existingTargetAssi.save();

      res.status(200).json(data);
    }
  } catch (error) {
    next(error);
  }
};
