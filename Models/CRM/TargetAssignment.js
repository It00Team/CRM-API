const Sequelize = require('sequelize');

const db = require('../../Utils/database.js');
const User = require('../Users/user.js');
const Project = require('../../Models/CRM/Project.js');
const Team = require('./Team.js');

const TargetAssignment = db.define('TargetAssignment', {
  target_name: Sequelize.STRING,
  target_date: Sequelize.DATE,
  target_deadline : Sequelize.DATE,
  target_status : Sequelize.ENUM('Completed', "Pending", "Working")

}, {
  timestamps: false,
});

// Define Foreign Key relationship
TargetAssignment.belongsTo(User, { foreignKey: 'assigned_to', as : 'assignedTo' }); 
TargetAssignment.belongsTo(User, { foreignKey: 'assigned_by', as : 'assignedBy'  }); 
TargetAssignment.belongsTo(Project, { foreignKey: 'project_id' }); 
TargetAssignment.belongsTo(Team,  { foreignKey: 'team_id' })


module.exports = TargetAssignment;
