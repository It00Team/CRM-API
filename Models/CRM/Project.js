const Sequelize = require('sequelize');
const db = require('../../Utils/database.js');
const Customer = require('./Customer.js');
const Department = require('../Users/department.js');
const User = require('../Users/user.js');


const Project = db.define('Project', {
  project_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  project_deadline: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW, // Default value is the current date and time
  },
  project_sop: {
    type: Sequelize.STRING,
    defaultValue: 'Default SOP', // Default value for SOP
  },
  project_requirement: {
    type: Sequelize.STRING,
    defaultValue: 'No specific requirements', // Default value for requirements
  },
  project_status: {
    type: Sequelize.ENUM("Onboarded", "Completed", "Working", "Pending"),
    defaultValue: "Onboarded", // Default value for status
  },
  sample_delivery_date : {
    type : Sequelize.DATE,
  },
  qc_done_date : {
    type : Sequelize.DATE,
  },
  final_delivery_date : {
    type : Sequelize.DATE,
  },
  client_feedback : {
    type : Sequelize.DATE
  }

}, {
  timestamps: true,
});

Project.belongsTo(Customer, { foreignKey: 'customer_id' });
Project.belongsTo(Department, { foreignKey: 'department_id' });
Project.belongsTo(User, { foreignKey: 'assigned_to_operation', as : 'assignedToOperation' } )
Project.belongsTo(User, { foreignKey: 'assigned_to_qc', as : 'assignedToQC' } )
Project.belongsTo(User, { foreignKey: 'assigned_by_sales', as : 'assignedBySales'  } )



module.exports = Project;
