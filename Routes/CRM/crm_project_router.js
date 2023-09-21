// satyam (12/08/2023)

const express = require('express');
const crm_project_router = express.Router();


const check_user = require('../../Middleware/check_user.js');
const add_project = require('../../Controllers/CRM/Project/add_project.js');
const update_project = require('../../Controllers/CRM/Project/update_project.js');
const get_all_project = require('../../Controllers/CRM/Project/get_project.js');
const delete_project = require('../../Controllers/CRM/Project/delete_project.js');
const save_file = require('../../Controllers/CRM/Project/save_file.js')

crm_project_router.use('/add-project', check_user);
crm_project_router.use('/update-project/:id', check_user);
crm_project_router.use('/get-all-project', check_user);
crm_project_router.use('/delete_project/:id', check_user);
crm_project_router.use('/get-users-project', check_user);
crm_project_router.use('/get-operation-project/', check_user);
crm_project_router.use('/get-qc-project/', check_user);



crm_project_router.post('/add-project', add_project.add_project);
crm_project_router.put('/update-project/:id', update_project.update_project);
crm_project_router.get('/get-all-project', get_all_project.get_all_project);
crm_project_router.get('/get-one-project/:id', get_all_project.get_one_project);
crm_project_router.delete('/delete_project/:id', delete_project.delete_project);
crm_project_router.get('/get-operation-project/', get_all_project.get_operations_project)
crm_project_router.get('/get-qc-project/', get_all_project.get_qc_project)         
crm_project_router.put('/save-file/:id/', save_file.add_file)


module.exports = crm_project_router;