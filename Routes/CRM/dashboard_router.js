const express = require('express');
const dashboard_router = express.Router();
const show_number = require('../../Controllers/CRM/Dashboard/show_number')

dashboard_router.get('/get', show_number.get_number);
module.exports = dashboard_router;