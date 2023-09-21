const TargetAssignment = require("../../../Models/CRM/TargetAssignment.js");

exports.delete_target_assignment = async (req, res, next) => {
  try {
    const authorised_user = req.user;
    if (authorised_user.designation === "team_leader" || authorised_user.designation === "super_admin" || authorised_user.designation === "admin") {
      const { id } = req.params;
      const targetAssignment = await TargetAssignment.findByPk(id);

      if (!targetAssignment) {
        res.send("Project not exists");
      } else {
        await targetAssignment.destroy();
        res.json(targetAssignment);
      }
    }
  } catch (error) {
    next(error);
  }
};
