const express = require('express');
const crm_mail_router = express.Router();
const check_user = require('../../Middleware/check_user.js');
const send_mail = require('../../Controllers/CRM/Mail/send_mail.js')


crm_mail_router.post('/add-mail', send_mail.mail);

module.exports = crm_mail_router;  