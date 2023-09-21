const express = require('express');
const serverPort = require('./Config/serverConfig');
const db = require('./Utils/database.js')
const cors = require('cors')
const app = express();
const user_router = require('./Routes/User/common_user_routes.js')
const hrms_department_router = require('./Routes/HRMS/hrms_department_routes.js')
const hrms_shifts_router = require('./Routes/HRMS/hrms_shifts_routes.js')
const hrms_user_shifts_router = require('./Routes/HRMS/hrms_user_shifts_routes.js')
const hrms_attendance_router = require('./Routes/HRMS/hrms_attendance_routes.js');
// CRM 
const crm_customer_router = require('./Routes/CRM/customer_routes.js')
const crm_qa_reqiew_router = require('./Routes/CRM/Crm_Qa_Review_Router.js');
const crm_project_router = require('./Routes/CRM/crm_project_router.js');
const crm_target_router = require('./Routes/CRM/crm_target_router.js');
const crm_task_router = require('./Routes/CRM/crm_task_router.js');
const crm_team_router = require('./Routes/CRM/crm_team_router.js');
const crm_qa_review_router = require('./Routes/CRM/Crm_Qa_Review_Router.js')
const dashboard_router = require('./Routes/CRM/dashboard_router.js')
const crm_event_router = require('./Routes/CRM/events_router.js')
const crm_performance_router = require('./Routes/CRM/performance_router.js')
const crm_mail_router = require('./Routes/CRM/email_router')

const dotenv = require('dotenv').config();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
db.sync();               

app.use('/api/users/', user_router)
app.use('/api/hrms/department/', hrms_department_router)  
app.use('/api/hrms/shifts/', hrms_shifts_router)
app.use('/api/hrms/user-shifts/', hrms_user_shifts_router)
app.use('/api/hrms/add-attendance/', hrms_attendance_router) 
app.use('/api/dashboard/', dashboard_router)

// crms
app.use('/api/crm/customer/', crm_customer_router)
app.use('/api/crm/qa-rewiew/', crm_qa_reqiew_router)
app.use('/api/crm/project/', crm_project_router) 
app.use('/api/crm/target/', crm_target_router)
app.use('/api/crm/task/', crm_task_router)
app.use('/api/crm/team/', crm_team_router)
app.use('/api/crm/review/', crm_qa_review_router);
app.use('/api/crm/events/', crm_event_router)
app.use('/api/crm/performance/', crm_performance_router)
app.use('/api/crm/mail/', crm_mail_router)




app.listen(serverPort.PORT , ()=>{
// app.listen(serverPort.PORT ,"192.168.2.195", ()=>{
    console.log(`${serverPort.PORT}`);
})     
