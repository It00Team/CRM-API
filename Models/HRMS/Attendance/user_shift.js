const Sequelize = require('sequelize');
const db = require('../../../Utils/database.js'); 
const User = require('../../Users/user.js') 
const Shift = require('./shifts.js')

// user's shift will be defined through this model 
const UserShift = db.define('UserShift', {
  
});

// add user_id and shift_id
UserShift.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
UserShift.belongsTo(Shift, { foreignKey: 'shift_id', onDelete: 'CASCADE' });

module.exports = UserShift;
