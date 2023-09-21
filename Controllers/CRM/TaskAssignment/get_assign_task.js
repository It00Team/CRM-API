const TaskAssignment = require("../../../Models/CRM/TaskAssignment.js");
const User = require("../../../Models/Users/user.js"); // Import the User model

exports.get_one_task = async (req, res, next) => {
  try {
    const id = req.params.id;

    const task = await TaskAssignment.findByPk(id, {
      include: [
        { model: User, as: "assignedTo" },
        { model: User, as: "assignedBy" },
      ],
    });

    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ status: "failed", message: "Task Not Found." });
    }
  } catch (error) {
    next(error);
  }
};

// exports.get_all_task = async (req, res, next) => {
//   try {
//     const task = await TaskAssignment.findAll({
//       include: [
//         { model: User, as: "assignedTo" },
//         { model: User, as: "assignedBy" },
//       ],
//     });
//     res.json(task);
//   } catch (error) {
//     next(error);
//   }
// };

exports.get_all_task = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const task = await TaskAssignment.findAll({
        include: [
          { model: User, as: "assignedTo" },
          { model: User, as: "assignedBy" },
        ],
      });
      res.json(task);
    }
  } catch (error) {
    next(error);
  }
};
