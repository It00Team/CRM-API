const Sequelize = require('sequelize')
const db = require('../../Utils/database.js')
const Department = require('./department.js')

const User = db.define('User', {

    username : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true,
    },

    password :{
        type : Sequelize.STRING,
        allowNull : false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'NA' // Default value for name is set to "NA"
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'NA',// Default value for email is set to "NA"
        unique : true 
      },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'NA' // Default value for phone is set to null
      },
    designation: {
        type: Sequelize.ENUM('super_admin', 'admin', 'team_leader', 'agent', 'quality_check'),
        allowNull: false,
        // defaultValue: 'NA' // Default value for designation is set to null
      },
      emp_type: {
        type: Sequelize.ENUM,
        values: ['Employee', 'Intern'],
        defaultValue: 'Employee'
      },
      dob: {
        type: Sequelize.DATE,
        defaultValue: null // Default value for dob is set to null
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['male', 'female', 'other'], 
        defaultValue: 'male'
      },
      place_birth: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for place_birth is set to "NA"
      },
      religion: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for religion is set to "NA"
      },
      nationality: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for nationality is set to "NA"
      },
      blood_group: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for blood_group is set to "NA"
      },
      father_name: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for father_name is set to "NA"
      },
      mother_name: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for mother_name is set to "NA"
      },
      marital_status: {
        type: Sequelize.ENUM,
        values: ['single', 'married', 'separated', 'widow'],
        defaultValue: 'single'
      },
      date_of_wedding: {
        type: Sequelize.DATE,
        defaultValue: null // Default value for date_of_wedding is set to null
      },
      city: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for city is set to "NA"
      },
      district: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for district is set to "NA"
      },
      pin_code: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for pin_code is set to 0
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for state is set to "NA"
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: 'NA' // Default value for address is set to "NA"
    }
}) 

User.belongsTo(Department,  {foreignKey : 'department_id'})

module.exports =  User;