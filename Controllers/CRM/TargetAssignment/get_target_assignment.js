const TargetAssignment = require("../../../Models/CRM/TargetAssignment.js");
const User = require("../../../Models/Users/user.js");
const Project = require('../../../Models/CRM/Project.js')


exports.get_one_target_assignment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const targetAssignment = await TargetAssignment.findByPk(id, {
      include: [
        { model: User, as: "assignedTo" },
        { model: User, as: "assignedBy" },
        { model: Project, as: "Project" },

      ],
    });

    if (!targetAssignment) {
      res.send("Target assignment not found");
    } else {
      res.json(targetAssignment);
    }
  } catch (error) {
    next(error);
  }
};

exports.get_all_target_assignment = async (req, res, next) => {
  try {
    const targetAssignment = await TargetAssignment.findAll({
      include: [
        { model: User, as: "assignedTo" },
        { model: User, as: "assignedBy" },
        { model: Project, as: "Project" },

      ],
    });

    res.json(targetAssignment);
  } catch (error) {
    next(error);
  }
};

exports.get_all_teams_target_assignment = async (req, res, next) => {
  try {
    const team_id = req.params.id;
    const targetAssignment = await TargetAssignment.findAll({
      where: { team_id: team_id },
      include: [
        { model: User, as: "assignedTo" },
        { model: User, as: "assignedBy" },
        { model: Project, as: "Project" },

      ],
    });

    res.json(targetAssignment);
  } catch (error) {
    next(error);
  }
};
