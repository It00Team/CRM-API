const Sequelize = require('sequelize');
const db = require('../../Utils/database.js');
const User = require('../Users/user.js');
const Project = require('../CRM/Project.js');

const Team = db.define('Team', {
    team_name: Sequelize.STRING,
}, {
    timestamps: true,
});

Team.belongsTo(Project, { foreignKey: 'project_id' });
Team.belongsTo(User, { foreignKey: 'leader_id', as: 'leader' });
Team.belongsToMany(User, { through: 'TeamMember', foreignKey: 'team_id' });
User.belongsToMany(Team, { through: 'TeamMember', foreignKey: 'user_id' });

// Team.sync({force:true})
 
module.exports = Team;
    