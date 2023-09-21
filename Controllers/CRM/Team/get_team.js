const Team = require("../../../Models/CRM/Team.js");
const User = require("../../../Models/Users/user.js");
const Project = require("../../../Models/CRM/Project.js");
const Department = require("../../../Models/Users/department.js");
const Performance = require('../../../Models/CRM/Performance.js')

exports.get_all_teams = async (req, res, next) => {
  try {
    const teams = await Team.findAll({
      include: [
        { model: User, as: "leader" },
        { model: User, through: "TeamMember" },
        Project,
      ],
    });
    // const teams = await Team.findAll();

    res.status(200).json(teams);
  } catch (error) {
    next(error);
  }
};

exports.get_one_team = async (req, res, next) => {
  try {
    const { id } = req.params;

    const team = await Team.findByPk(id, {
      include: [
        { model: User, as: "leader" },
        { model: User, through: "TeamMember" },
        Project,
      ],
    });

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    // const teamMembers = team.Users;

    // const performanceData = [];
    // for (const member of teamMembers) {
    //   const performance = await Performance.findAll({
    //     where: { user_id: member.id },
    //   });

    //   if (performance) {
    //     performanceData.push({
    //       user_id: member.id,
    //       username : member.username,
    //       name: member.name,
    //       performance: performance,
    //     });
    //   }
    // }
    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};



exports.get_one_team_with_date = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { date } = req.query;

    const team = await Team.findByPk(id, {
      include: [
        { model: User, as: "leader" },
        { model: User, through: "TeamMember" },
        Project,
      ],
    });

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    // const teamMembers = team.Users;

    // const performanceData = [];
    // for (const member of teamMembers) {
    //   const performance = await Performance.findAll({
    //     where: { user_id: member.id, date : date },
    //   });

    //   if (performance) {
    //     performanceData.push({
    //       user_id: member.id,
    //       username : member.username,
    //       name: member.name,
    //       performance: performance,
    //     });
      // }
    // }
    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};
