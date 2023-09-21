// 14/08/2023 (Satyam)

const express = require('express');
const crm_team_router = express.Router();
const check_user = require('../../Middleware/check_user.js');
const add_team = require('../../Controllers/CRM/Team/add_team.js');
const get_team = require('../../Controllers/CRM/Team/get_team.js')
const delete_team = require('../../Controllers/CRM/Team/delete_team.js')
const update_team = require('../../Controllers/CRM/Team/update_team.js')

crm_team_router.use('/create-team', check_user);
crm_team_router.use('/get-all-teams',check_user)
crm_team_router.use('/delete-team/:id',check_user);
crm_team_router.use('/update-team/:id',check_user)

crm_team_router.post('/create-team',add_team.add_team);
crm_team_router.get('/get-all-teams',get_team.get_all_teams);
crm_team_router.get('/get-one-team/:id', get_team.get_one_team);
crm_team_router.get('/get-user-performance/:id', get_team.get_one_team_with_date);


crm_team_router.delete('/delete-team/:id',delete_team.delete_team);
crm_team_router.put('/update-team/:id', update_team.update_team);

module.exports = crm_team_router;   