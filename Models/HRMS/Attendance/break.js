const Sequelize = require('sequelize');
const db = require('../../../Utils/database.js'); 
const User = require('../../Users/user.js'); 
const Shift = require('./shifts'); 
const Attendance = require('./attendance');

// user break table 
const Break = db.define('Break', {
  break_start_time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  break_end_time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Break.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Break.belongsTo(Shift, { foreignKey: 'shift_id', onDelete: 'CASCADE' });
Break.belongsTo(Attendance, { foreignKey: 'attendance_id', onDelete: 'CASCADE' });

module.exports = Break;
