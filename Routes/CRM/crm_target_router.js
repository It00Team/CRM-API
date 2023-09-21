
const express = require('express');
const crm_target_router = express.Router();
const check_user = require('../../Middleware/check_user.js');
const add_target_assignment = require('../../Controllers/CRM/TargetAssignment/add_target_assignment.js')
const delete_target_assignment = require('../../Controllers/CRM/TargetAssignment/delete_target_assignment.js')
const get_target_assignment = require('../../Controllers/CRM/TargetAssignment/get_target_assignment.js')
const update_target_assignment = require('../../Controllers/CRM/TargetAssignment/update_target_assignment.js');
const get_user_target = require('../../Controllers/CRM/TargetAssignment/get_user_target.js');

crm_target_router.use('/add-target',check_user);
crm_target_router.use('/delete-target/:id',check_user);
crm_target_router.use('/get-all-target',check_user);
crm_target_router.use('/update-target/:id/',check_user)
crm_target_router.use('/get-user-target',check_user)
crm_target_router.use('/get-user-created-target',check_user)
crm_target_router.use('/get-all-team-target',check_user)


crm_target_router.post('/add-target', add_target_assignment.add_target_assignment);
crm_target_router.delete('/delete-target/:id', delete_target_assignment.delete_target_assignment);
crm_target_router.get('/get-all-target', get_target_assignment.get_all_target_assignment );
crm_target_router.get('/get-one-target/:id', get_target_assignment.get_one_target_assignment );
crm_target_router.put('/update-target/:id', update_target_assignment.update_target_assignment);
crm_target_router.get('/get-user-target', get_user_target.get_user_target)
crm_target_router.get('/get-user-created-target', get_user_target.get_user_created_target)
crm_target_router.get('/get-all-team-target/:id', get_target_assignment.get_all_teams_target_assignment)


module.exports = crm_target_router;   