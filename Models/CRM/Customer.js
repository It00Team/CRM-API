const Sequelize = require('sequelize');
const db = require('../../Utils/database.js');
const User = require('../Users/user.js');

const Customer = db.define('customer', {
  customer_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,   
    unique: true, 
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  company_name: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  country_name: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  client_region_type: {
    type: Sequelize.ENUM('domestic', 'international', ''),
    allowNull: true,
    defaultValue: '',
  },
  external_spoc: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },

  client_status: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  lead_type: {
    type: Sequelize.ENUM('hot', 'dead', 'lost', 'cold', ''),
    allowNull: true,
    defaultValue: '',
  },
  remark: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  last_follow_up: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  call: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  project_name: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  project_status: {
    type: Sequelize.ENUM('onboarded', 'working', 'completed', 'pending'),
    allowNull: true,
  },
  stage_1_note: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  stage_2_note: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  final_remark: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  sample_status: { 
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'ffh',
  },
}, {
  timestamps: true,
});

Customer.belongsTo(User, { foreignKey: 'onboarded_by', as : 'onboardedBy' });
module.exports = Customer;
