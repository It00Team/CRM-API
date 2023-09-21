const Department = require("../../../Models/Users/department.js");

exports.add_department = async (req, res, next) => {
  try {
    // const authorised_user = req.user;
    // console.log(authorised_user.designation);
    // if (
    //   authorised_user.designation === "team_leader" ||
    //   authorised_user.designation === "super_admin" ||
    //   authorised_user.designation === "admin"
    // ) {
      const { name } = req.body;

      const dep = await Department.findOne({ where: { name: name } });
      if (dep) {
        res.send("This Department already exists");
      } else {
        const value = await Department.create({ name: name });
        res.json(value);
      }
    // }
  } catch (error) {
    next(error);
  }
};
