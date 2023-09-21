// Himanshu bisen (11/08/23)

const Qareview = require('../../../Models/CRM/QAReview');


exports.add_QaReview = async (req, res, next) => {
    try {
        const newQaReview = await Qareview.create({
            advisor_emp_id: req.body.advisor_emp_id ,
            advisor_name: req.body.advisor_name,
            tl_name: req.body.tl_name,
            manager: req.body.manager,
            qc_tl_name : req.body.qc_tl_name,
            auditor_emp_id: req.body.auditor_emp_id,
            quality_analyst: req.body.quality_analyst,
            project_name: req.body.project_name,
            collection_date: req.body.collection_date,
            audit_date: req.body.audit_date,
            reference_of_doc: req.body.reference_of_doc,
            unique_id: req.body.unique_id,
            observation: req.body.observation,
            score: req.body.score,
            remark: req.body.remark,
            status: req.body.status,
            duration: req.body.duration,
            customer_id: req.body.customer_id,
        });

        res.status(201).json(newQaReview); 
        
    } catch (error) {
        next(error);
    }
};