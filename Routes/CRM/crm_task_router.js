// himanshu bisen 13-08-2023
const express = require('express');
const crm_task_router = express.Router();
const check_user = require('../../Middleware/check_user.js');
const add_assign_task = require('../../Controllers/CRM/TaskAssignment/add_assign_task.js')
const delete_assign_task = require('../../Controllers/CRM/TaskAssignment/delete_assign_task.js')
const get_assign_task = require('../../Controllers/CRM/TaskAssignment/get_assign_task.js')
const update_assign_task = require('../../Controllers/CRM/TaskAssignment/update_assign_task.js');
const show_users_task = require('../../Controllers/CRM/TaskAssignment/show_user_own_task.js');

crm_task_router.use('/add-task',check_user);
crm_task_router.use('/delete-task/:id/',check_user);
crm_task_router.use('/get-all-task',check_user);
crm_task_router.use('/update-task/:id/',check_user)
crm_task_router.use('/show-user-task/', check_user)
crm_task_router.use('/get-one-task/:id', check_user);
crm_task_router.use('/show-user-created-task/', check_user)


    
crm_task_router.post('/add-task', add_assign_task.add_assign_task);
crm_task_router.delete('/delete-task/:id', delete_assign_task.delete_task);
crm_task_router.get('/get-one-task/:id', get_assign_task.get_one_task );
crm_task_router.get('/get-all-task', get_assign_task.get_all_task);
crm_task_router.put('/update-task/:id', update_assign_task.update_task_assignment);
crm_task_router.get('/show-user-task/', show_users_task.show_users_task)
crm_task_router.get('/show-user-created-task/', show_users_task.get_user_created_target)



module.exports = crm_task_router;    