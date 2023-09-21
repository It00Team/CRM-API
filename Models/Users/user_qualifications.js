const Sequelize = require('sequelize');
const db = require('../../Utils/database.js');
const User = require('./user.js');

const UserQualification = db.define('user_qualification',{
    degree:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    start_date:{
        type:Sequelize.STRING,
        allowNull:false
    },
    end_date:{
        type:Sequelize.STRING,
        allowNull:false
    },
    marks:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    institute : {
        type : Sequelize.STRING,
        allowNull : false
    },
    marksheet:{
        type:Sequelize.STRING,
        allowNull: true
    }
})

UserQualification.belongsTo(User, { foreignKey: 'user_id' });

module.exports = UserQualification;
