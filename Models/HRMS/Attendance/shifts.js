const Sequelize = require('sequelize');
const db = require('../../../Utils/database.js'); 

// models for creating shifts 
const Shift = db.define('Shift', {
  shift_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  end_time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  is_active :{
    type : Sequelize.BOOLEAN,
    defaultValue : true, 
  }
});

module.exports = Shift;
