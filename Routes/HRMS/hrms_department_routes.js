const express = require('express')
const hrms_department_router = express.Router()
const check_user = require('../../Middleware/check_user.js') 
const add_department = require('../../Controllers/HRMS/Department/add_department.js')
const show_department = require('../../Controllers/HRMS/Department/show_department.js')

// hrms_department_router.use('/add-department', check_user)

hrms_department_router.post('/add-department', add_department.add_department)
hrms_department_router.get('/show-department', show_department.show_department)


module.exports = hrms_department_router; 