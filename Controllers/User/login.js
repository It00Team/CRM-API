const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../Models/Users/user.js");
const Department = require("../../Models/Users/department.js");

exports.user_login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username: username },
      include: [
        {
          model: Department,
          as: "department", 
        },
      ],
    });

    if (!user) {
      res.send("user does not exists");
    }
    const ismatch = await bcrypt.compare(password, user.password);

    if (user.username === username && ismatch) {
      const token = jwt.sign(
        {
          user_id: user.id,
          department: user.department.name,
          designation: user.designation,
          name : user.name,
          email : user.email,
          username : user.username
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "5d",
        }
      );

      res.send({ msg: "You are logged In", token: token});
    } else {
      res.send("Invalid username or password");
    }
  } catch (error) {
    next(error);
  }
};
