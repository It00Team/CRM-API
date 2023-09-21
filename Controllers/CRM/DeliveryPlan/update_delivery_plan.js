// Satyam Kumar (10/08/23)

const DeliveryPlan = require('../../../Models/CRM/DeliveryPlan.js');

exports.update_delivery_plan = async (req, res, next) => {
    try {
        const { id } = req.params; // Extract ID from route parameter
        const { delivery_date, delivery_status } = req.body;

        // Find the DeliveryPlan record by ID
        const existingPlan = await DeliveryPlan.findOne({ where: { id: id } });

        if (!existingPlan) {
            return res.status(404).send('Delivery plan not found');
        }

        // Update the DeliveryPlan record
        existingPlan.delivery_date = delivery_date;
        existingPlan.delivery_status = delivery_status;
        await existingPlan.save();

        res.status(200).json(existingPlan); // Respond with the updated Plan
    } catch (error) {
        next(error);
    }
};
