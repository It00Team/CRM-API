// Satyam Kumar (10/08/23)


const DeliveryPlan = require('../../../Models/CRM/DeliveryPlan.js');

exports.delete_delivery_plan = async (req, res, next) =>{
    try {
        const id = req.params.id;

        const delivery = await DeliveryPlan.findByPk(id);

        if (!delivery) {
            res.send("not exits");
        } else {
            const del_delivery = await delivery.destroy();
            res.json(del_delivery);
        }
    } catch (error) {
        next(error);
    }
}