const Project = require("../../../Models/CRM/Project.js");


exports.update_project = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const projectId = req.params.id;
      const {
        project_name,
        project_deadline,
        project_status,
        project_requirement,
        customer_id,
        department_id,
        assigned_to_operation,
        assigned_by_sales,
        assigned_to_qc,
      } = req.body;


      // Find the project by ID
      const existingProject = await Project.findByPk(projectId);

      if (!existingProject) {
        return res.status(404).send("Project not found");
      }

      // Update the project fields if provided
      if (project_name !== undefined) {
        existingProject.project_name = project_name;
      }
      // if (project_deadline !== undefined) {
      //   existingProject.project_deadline = project_deadline;
      // }
      if (project_status !== undefined) {
        existingProject.project_status = project_status;
      }
      if (project_requirement !== undefined) {
        existingProject.project_requirement = project_requirement;
      }
      if (department_id !== undefined) {
        existingProject.department_id = department_id;
      }
      if (customer_id !== undefined) {
        existingProject.customer_id = customer_id;
      }
      if (assigned_to_operation !== undefined) {
        existingProject.assigned_to_operation = assigned_to_operation;
        existingProject.assigned_by_sales = authorised_user.id;
      }
      if (assigned_to_qc !== undefined) {
        existingProject.assigned_to_qc = assigned_to_qc;
      }
      await existingProject.save();

      res.status(200).json(existingProject); // Respond with the updated project
    }
  } catch (error) {
    next(error);
  }
};
