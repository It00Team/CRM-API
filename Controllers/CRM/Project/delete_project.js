// satyam (12/08/2023)

const Project = require("../../../Models/CRM/Project.js");

exports.delete_project = async (req, res, next) => {
  try {
    const authorised_user = req.user;
    if (authorised_user.designation === "team_leader" || authorised_user.designation === "super_admin" || authorised_user.designation === "admin") {
      const { id } = req.params;

      const project = await Project.findByPk(id);

      if (!project) {
        res.send("Project not exits");
      } else {
        const del_project = await project.destroy();
        res.json(del_project);
      }
    }
  } catch (error) {
    next(error);
  }
};
