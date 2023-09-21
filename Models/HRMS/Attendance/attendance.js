const Sequelize = require('sequelize');
const db = require('../../../Utils/database.js');
const User = require('../../Users/user.js') 
const Shift = require('./shifts.js') 
const UserShift = require('./user_shift.js') 

// user attendance model 
const Attendance = db.define('Attendance', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  check_in_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  check_out_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  total_hours: {
    type: Sequelize.DECIMAL(5, 2), 
    allowNull: true,
  },
});

// add user-id and shift-id 
Attendance.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Attendance.belongsTo(Shift, { foreignKey: 'shift_id', onDelete: 'CASCADE' });
Attendance.belongsTo(UserShift, { foreignKey: 'user_shift_id', onDelete: 'CASCADE' });


module.exports = Attendance;
