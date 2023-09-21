
const Client = require("../../../Models/CRM/Client.js");
const User = require("../../../Models/Users/user.js");

exports.get_all_customer = async (req, res, next) => {
  try {
    const customer = await Client.findAll();
    res.json(customer);
  } catch (error) {
    next(error);
  }
};

exports.get_one_customer = async (req, res, next) => {
  try {
    const id = req.params.id;

    const customer = await Client.findByPk(id);
    if (!customer) {
      res.send("Customer not exits");
    } else {
      res.json(customer);
    }
  } catch (error) {
    next(error);
  }
};


exports.get_assigned_customer = async (req, res, next) => {
  try {
    const id = req.user.id;

    const customer = await Client.findAll({where: {assignedToOperation : id}});
    console.log(customer)
    if (!customer) {
      res.send("Customer not exits");
    } else {
      res.json(customer);
    }
  } catch (error) {
    next(error);
  }
};
