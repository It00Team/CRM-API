// const Team = require('../../../Models/CRM/Team.js');
// const User = require('../../../Models/Users/user.js');
// const Project = require('../../../Models/CRM/Project.js');

// exports.update_team = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body; // New data to update the team
        
//         const affectedRowsCount = await Team.update(updatedData, {
//             where: { id : id},
//         });
        
//         if (affectedRowsCount === 0) {
//             return res.status(404).json({ message: 'Team not found' });
//         }
        
//         const updatedTeam = await Team.findByPk(id); // Retrieve the updated team
        
//         res.status(200).json(updatedTeam);
//     } catch (error) {
//         next(error);
//     }
// }

const Team = require("../../../Models/CRM/Team.js");

exports.update_team = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const id = req.params.id;
      const { team_name, team_id } = req.body;

      const existingTeam = await Team.findByPk(id);

      if (!existingTeam) {
        return res.status(404).send("Team not found");
      }

      existingTeam.team_name = team_name;
      existingTeam.team_id = team_id;

      await existingTeam.save();

      res.status(200).json(existingTeam);
    }
  } catch (error) {
    next(error);
  }
};

