const TargetAssignment = require("../../../Models/CRM/TargetAssignment.js");
const User = require("../../../Models/Users/user.js");
const Project = require('../../../Models/CRM/Project.js')

exports.get_user_target = async (req, res, next) => {
  try {
    const id = req.user.id;
    const targetAssignment = await TargetAssignment.findAll({
      where: { assigned_to: id },
      include: [
        { model: User, as: "assignedTo" },
        { model: User, as: "assignedBy" },
        { model: Project, as: "project" },

      ],
    });

    res.json(targetAssignment);
  } catch (error) {
    next(error);
  }
};

exports.get_user_created_target = async (req, res, next) => {
  try {
    const id = req.user.id;
    const targetAssignment = await TargetAssignment.findAll(
      {
        where: { assigned_by: id },
        include: [
          { model: User, as: "assignedTo" },
          { model: User, as: "assignedBy" },
          { model: Project, as: "project" },

        ],
      }
    );

    res.json(targetAssignment);
  } catch (error) {
    next(error);
  }
};
