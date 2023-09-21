const express = require('express');
const crm_event_router = express.Router();
const check_user = require('../../Middleware/check_user.js');

const add_events = require('../../Controllers/CRM/Events/add_event.js')

crm_event_router.use('/add-event', check_user);
crm_event_router.use('/get-event', check_user);
crm_event_router.use('/update-event', check_user);

crm_event_router.post('/add-event', add_events.add_events);
crm_event_router.get('/get-event', add_events.get_events);
crm_event_router.put('/update-event', add_events.update_events);


module.exports = crm_event_router;        