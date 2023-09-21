const Sequelize = require('sequelize');
const db = require('../../Utils/database.js');
const User = require('../Users/user.js');

const Events = db.define('Events', {
  event_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  event_start: {
    type: Sequelize.DATE,
  },
  event_end: {
    type: Sequelize.DATE,
  },
  event_priority: {
    type: Sequelize.ENUM('high_priority', 'low_priority', 'medium_priority'),
  },
}, {
  timestamps: true,
});

Events.belongsTo(User, {foreignKey: 'user_id'} )

module.exports = Events;
