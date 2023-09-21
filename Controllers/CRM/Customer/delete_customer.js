// Satyam Kumar (10/08/23)

const Client = require("../../../Models/CRM/Client.js");

exports.delete_customer = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const id = req.params.id;

      const customer = await Client.findByPk(id);

      if (!customer) {
        res.send("Customer not exits");
      } else {
        const del_customer = await customer.destroy();
        res.json(del_customer);
      }
    }
  } catch (error) {
    next(error);
  }
};
