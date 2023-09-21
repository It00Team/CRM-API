const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../../Models/Users/user.js') 

exports.change_password = async (req, res, next) => {
    try {
      const { password, confirm_password } = req.body;
      console.log(password, confirm_password)

      if (!password || !confirm_password) {
        res.send({ msg: "Please fill all the fields" });
      }

      if (password != confirm_password) {
        res.send({ msg: "confirm password and password does not match" });
      }
      console.log(req.user.id)

      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(password, salt);


      const user = await User.findByPk(req.user.id);
      await user.update({ password: hashpassword });
      res.send({ status: "success", message: "Password changed succesfully" });

    } catch (error) {
      next(error);
    }
};

