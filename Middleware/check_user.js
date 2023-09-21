const User = require("../Models/Users/user.js");
const jwt = require("jsonwebtoken");

const check_user = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith('Bearer')) {
    try {

      token = authorization.split(' ')[1]; // get jwt token 
      const { user_id } = jwt.verify(token, process.env.JWT_SECRET_KEY); // find user_id
      req.user = await User.findOne({where: {id: user_id }, attributes: { exclude: ['password'] }}); // check if user is present in database 
      // console.log(req.user)
      next(); // send that user to controllers

    } catch (error) {
      console.log(error);
      res.status(401).send({ status: 'failed', message: 'Unauthorized User' });
    }
  }
  if (!token) {
    res.status(401).send({ status: 'failed', message: 'Unauthorized User, No Token' });
  }
};

module.exports = check_user;