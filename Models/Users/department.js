const Sequelize = require('sequelize');
const db = require('../../Utils/database.js');
// const User = require('./user.js');

const Department = db.define('department', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Department;
