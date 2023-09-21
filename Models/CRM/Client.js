const Sequelize = require('sequelize');
const db = require('../../Utils/database.js');


const Client = db.define("Client", {
  name: {
    type: Sequelize.STRING,
    allowNull: true, 
  },
  regionType: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  externalSPOC: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  onboardedBy: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  leadType: {
    type: Sequelize.STRING,
    allowNull: true,
  }, 
  remark: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastFollowUp: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  projectName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  projectStatus: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  projectSOP :{
    type: Sequelize.STRING,
    allowNull: true,
  },
  projectDeadline:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  projectDepartment:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  sampleDeliveryDate:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  qcDate:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  deliveryDate:{
    type: Sequelize.STRING,
    allowNull: true,
  },
  stage1Note: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  stage2Note: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  clientFeedback :{
    type: Sequelize.STRING,
    allowNull: true,
  },
  assignedToOperation : {
    type: Sequelize.STRING,
    allowNull: true,
  },
  assignedBy: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  assignedToQc :{
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Client; 