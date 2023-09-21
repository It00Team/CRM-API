// Satyam Kumar (10/08/23)

const DeliveryPlan = require('../../../Models/CRM/DeliveryPlan.js');

exports.add_delivery_plan = async (req, res, next) => {
    try {
        const { delivery_date, delivery_status ,customer_id, project_id} = req.body;

        // Check if the Delivery with the provided id already exists
    
            // Create a new DeliveryPlan record
            const newPlan = await DeliveryPlan.create({
                delivery_date: delivery_date,
                delivery_status: delivery_status,
                customer_id: customer_id,
                project_id: project_id,
            });

            res.status(201).json(newPlan); // Respond with the newly created Plan
        
    } catch (error) {
        next(error);
    }
};