// Himanshu bisen (11/08/23)
const express = require('express');
const crm_QaReview_router = express.Router();
const check_user = require('../../Middleware/check_user.js');
const  add_QAreview= require('../../Controllers/CRM/CrmQaReview/AddCrmQaReview.js')
const delete_QaReview = require('../../Controllers/CRM/CrmQaReview/DeleteCrmQaReview.js')
const updateCrmQaReviewController = require('../../Controllers/CRM/CrmQaReview/UpdateCrmQaReview.js')
const getCrmQaReviewController = require('../../Controllers/CRM/CrmQaReview/GetCrmQaReview.js')

crm_QaReview_router.use('/add',check_user);
crm_QaReview_router.use('/delete_QaReview:id',check_user);
crm_QaReview_router.use('/update_QaReview/:id',check_user);
// crm_QaReview_router.use('/get-review',check_user)


crm_QaReview_router.post('/add', add_QAreview.add_QaReview);
crm_QaReview_router.delete('/delete_QaReview/:id', delete_QaReview.deleteReview);
crm_QaReview_router.put('/update_QaReview/:id', updateCrmQaReviewController.updateQaReview);
crm_QaReview_router.get('/get-review/', getCrmQaReviewController.get_all_reviews);
crm_QaReview_router.get('/get_one_QaReview/:id', getCrmQaReviewController.get_one_QaReview);

module.exports = crm_QaReview_router;   