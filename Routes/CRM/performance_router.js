const express = require('express');
const crm_performance_router = express.Router();
const check_user = require('../../Middleware/check_user.js');
const performance_add = require('../../Controllers/CRM/Performance/performance_add.js')

crm_performance_router.use('/add-performance', check_user);
crm_performance_router.post('/add-performance', performance_add.performance_add);
crm_performance_router.get('/show-performance/:date', performance_add.show_performance);
crm_performance_router.get('/show-range/:date/:end/:user_id', performance_add.show_performance_range);




module.exports = crm_performance_router;          