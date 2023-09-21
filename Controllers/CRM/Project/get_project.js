// satyam (12/08/2023)

const Customer = require("../../../Models/CRM/Customer.js");
const Project = require("../../../Models/CRM/Project.js");
const Department = require("../../../Models/Users/department.js");
const User = require("../../../Models/Users/user.js");


exports.get_all_project = async (req, res, next) => {
  try {
    const project = await Project.findAll({
      include: [  
        Department,
        Customer,
        { model: User, as: "assignedToOperation" },
        { model: User, as: "assignedBySales" },
        { model: User, as: "assignedToQC" },

      ],
    });
    res.json(project);
  } catch (error) {
    next(error);
  }
};

exports.get_one_project = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await Project.findByPk(id, {
      include: [
        Department,
        Customer,
        { model: User, as: "assignedToOperation" },
        { model: User, as: "assignedBySales" },
        { model: User, as: "assignedToQC" },
      ],
    });
    if (!project) {
      res.send("project not exits");
    } else {
      res.json(project);
    }
  } catch (error) {
    next(error);
  }
};

exports.get_operations_project = async (req, res, next) => {
  try {
    const id = req.user.id;
    const project = await Project.findAll({
      where: { assigned_to_operation: id },
      include: [
        Department,
        Customer,
        { model: User, as: "assignedToOperation" },
        { model: User, as: "assignedBySales" },
        { model: User, as: "assignedToQC" },
      ],
    });
    if (!project) {
      res.send("project not exits");
    } else {
      res.json(project);
    }
  } catch (error) {
    next(error);
  }
};


exports.get_qc_project = async (req, res, next) => {
  try {
    const id = req.user.id;
    const project = await Project.findAll({
      where: { assigned_to_qc: id },
      include: [
        Department,
        Customer,
        { model: User, as: "assignedToOperation" },
        { model: User, as: "assignedBySales" },
        { model: User, as: "assignedToQC" },
      ],
    });
    if (!project) {
      res.send("project not exits");
    } else {
      res.json(project);
    }
  } catch (error) {
    next(error);
  }
};
