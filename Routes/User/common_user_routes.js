const express = require('express')
const user_router = express.Router()
const check_user = require('../../Middleware/check_user.js') 

const login = require('../../Controllers/User/login.js')
const logout = require('../../Controllers/User/logout.js')
const change_password = require('../../Controllers/User/change_pasword.js')
const common_user_registration = require('../../Controllers/User/common_user_registration.js')
const common_user_profile_show = require('../../Controllers/User/common_user_profile_show.js')
const common_show_all_user =  require('../../Controllers/User/common_show_all_user.js')
const common_user_update_profile = require('../../Controllers/User/common_user_update_profile.js')

user_router.use('/change-password', check_user)
user_router.use('/user-add-profile/',check_user);
user_router.use('/user-my-profile/', check_user);
user_router.use('/update-profile/:id', check_user);



user_router.post('/user-login', login.user_login);
user_router.post('/user-logout', logout.user_logout);
user_router.post('/change-password', change_password.change_password);
 
user_router.post('/user-add', common_user_registration.user_registration);
user_router.post('/user-add-profile/', common_user_update_profile.update_user_profile);

user_router.get('/user-my-profile/', common_user_profile_show.show_user_profile);
user_router.get('/user-profile/', common_show_all_user.show_all_user_profile);
user_router.get('/get-one-user-profile/:id', common_show_all_user.get_one_user_profile);
user_router.put('/update-profile/:id', common_user_update_profile.update_user_profile);




module.exports = user_router;  