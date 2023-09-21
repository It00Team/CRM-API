const Sequelize = require('sequelize');
const db = require('../../Utils/database.js');
const User = require('../Users/user.js');

const TaskAssignment = db.define('TaskAssignment', {
  task_name: Sequelize.STRING,
  task_date: Sequelize.DATE,
  task_status: Sequelize.ENUM('Assigned', 'Completed', 'Pending'),
  task_requirement : Sequelize.STRING,
  task_sop : Sequelize.STRING,
  review : Sequelize.STRING,
  task_deadline : Sequelize.DATE,
}, {
  timestamps: false,
});

TaskAssignment.belongsTo(User, { foreignKey: 'assigned_to',  as : 'assignedTo' });
TaskAssignment.belongsTo(User, { foreignKey: 'assigned_by', as : 'assignedBy' });

// TaskAssignment.sync({force:true})
module.exports = TaskAssignment;
