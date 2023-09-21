// Himanshu bisen (11/08/23)

const Qareview = require('../../../Models/CRM/QAReview');

exports.updateQaReview = async (req, res, next) => {
    try {
        const id = req.params.id; // Assuming you're extracting the ID from the URL
        const {
            advisor_emp_id,
            advisor_name,
            tl_name,
            manager,
            auditor_emp_id,
            quality_analyst,
            project_name,
            collection_date,
            review_date,
            reference_of_doc,
            unique_id,
            observation,
            score,
            remark,
            review_status,
            duration,
        } = req.body;

        // Check if the QA review with the provided ID exists
        const existingQaReview = await Qareview.findByPk(id);

        if (!existingQaReview) {
            return res.status(404).json({ message: 'QA review not found' });
        }

        existingQaReview.advisor_emp_id = advisor_emp_id;
        existingQaReview.advisor_name = advisor_name;
        existingQaReview.tl_name = tl_name;
        existingQaReview.manager = manager;
        existingQaReview.auditor_emp_id = auditor_emp_id;
        existingQaReview.quality_analyst = quality_analyst;
        existingQaReview.project_name = project_name;
        existingQaReview.collection_date = collection_date;
        existingQaReview.audit_date = review_date;
        existingQaReview.reference_of_doc = reference_of_doc;
        existingQaReview.unique_id = unique_id;
        existingQaReview.observation = observation;
        existingQaReview.score = score;
        existingQaReview.remark = remark;
        existingQaReview.status = review_status;
        existingQaReview.duration = duration;

        await existingQaReview.save();

        res.status(200).json(existingQaReview); // Respond with the updated QA review

    } catch (error) {
        next(error);
    }
};