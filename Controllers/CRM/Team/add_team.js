const Team = require("../../../Models/CRM/Team.js");

exports.add_team = async (req, res, next) => {
  try {
    const authorised_user = req.user;
    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const { team_name, project_id, team_id, leader_id } = req.body;

      const team = await Team.create({
        team_name: team_name,
        project_id: project_id,
        leader_id: leader_id,
      });

      if (team_id && team_id.length > 0) {
        await team.addUsers(team_id);
      }
      res.status(201).json(team);
    }
  } catch (error) {
    next(error);
  }
};
