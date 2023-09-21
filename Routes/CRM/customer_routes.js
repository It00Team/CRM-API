const express = require('express');
const crm_customer_router = express.Router();
const check_user = require('../../Middleware/check_user.js');
const add_customer = require('../../Controllers/CRM/Customer/add_customer.js')
const delete_customer = require('../../Controllers/CRM/Customer/delete_customer.js')
const get_customer = require('../../Controllers/CRM/Customer/get_customer.js')
const update_customer = require('../../Controllers/CRM/Customer/update_customer.js');
const add_many_client = require('../../Controllers/CRM/Customer/add_many_client.js');
const save_file = require('../../Controllers/CRM/Customer/save_file.js');

crm_customer_router.use('/add-customer',check_user);
crm_customer_router.use('/delete-customer',check_user);
crm_customer_router.use('/all-customer',check_user);
crm_customer_router.use('/update-customer/:id/',check_user)
crm_customer_router.get('/get-assigned-customer/', check_user);

crm_customer_router.post('/add-customer', add_customer.add_customer);
crm_customer_router.post('/add-many-customers', add_many_client.add_many_client);
crm_customer_router.delete('/delete-customer/:id', delete_customer.delete_customer);
crm_customer_router.get('/all-customer', get_customer.get_all_customer);
crm_customer_router.get('/get-one-customer/:id', get_customer.get_one_customer);
crm_customer_router.get('/get-assigned-customer/', get_customer.get_assigned_customer);
crm_customer_router.put('/update-customer/:id', update_customer.update_customer);
crm_customer_router.put('/save-file/:id/', save_file.add_file)

module.exports = crm_customer_router;   