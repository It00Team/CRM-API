const Sequelize = require('sequelize');
const dbConfig = require('../Config/dbConfig.js')

const db = new Sequelize(dbConfig.DB_NAME , dbConfig.USERNAME , dbConfig.PASSWORD, {
    dialect : dbConfig.DIALECT,
    localhost : dbConfig.HOST
})

module.exports = db;

