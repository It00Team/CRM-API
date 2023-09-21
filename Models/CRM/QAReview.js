const Sequelize = require('sequelize');
const db = require('../../Utils/database.js')
const Client = require('../CRM/Client.js');


const Qareview = db.define('Qareview', {
  advisor_emp_id: Sequelize.STRING,
  advisor_name: Sequelize.STRING,
  tl_name: Sequelize.STRING,
  manager: Sequelize.STRING,
  auditor_emp_id: Sequelize.STRING,
  quality_analyst: Sequelize.STRING,
  qc_tl_name : Sequelize.STRING,
  project_name: Sequelize.STRING,
  collection_date: Sequelize.DATE,
  audit_date: Sequelize.DATE,
  reference_of_doc: Sequelize.STRING,
  unique_id: Sequelize.STRING,
  observation: Sequelize.TEXT,
  score: Sequelize.STRING,
  remark: Sequelize.TEXT,
  status: Sequelize.STRING,
  duration: Sequelize.STRING,
});      


Qareview.belongsTo(Client, {foreignKey : 'customer_id', as : 'customerId'})
module.exports = Qareview;