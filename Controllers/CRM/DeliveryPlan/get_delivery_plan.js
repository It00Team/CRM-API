// Satyam Kumar (10/08/23)

const DeliveryPlan = require('../../../Models/CRM/DeliveryPlan.js');

exports.get_all_delivery_plan = async(req, res, next)=>{
    try {
        const delivery = await DeliveryPlan.findAll();
        res.json(delivery);

    } catch (error) {
        next(error);
    }
}

exports.get_one_delivery = async(req, res, next)=>{
    try {
        const id = req.params.id;

        const delivery = await DeliveryPlan.findByPk(id);
        if (!delivery) {
            res.send("delivery not exits");
        } else {
            res.json(delivery);
        }
    } catch (error) {
        next(error)
    }
}