const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../Models/Users/user.js");
const dotenv = require('dotenv').config();

module.exports.user_registration = async (req, res, next) => {
  try {
    const {
      username,
      password,
      name,
      department_id,
      email,
      phone,
      designation,
      emp_type,
      dob,
      gender,
      place_birth,
      religion,
      nationality,
      blood_group,
      father_name,
      mother_name,
      marital_status,
      date_of_wedding,
      city,
      district,
      pin_code,
      state,
      address,
    } = req.body;

    if (!username || !password || !designation || !email)  {
      res.send("mandotory fields username, password, designation, email");
    }

    const user = await User.findOne({ where: { username: username } });
    if (user) {
      console.log("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const user_data = {
      username: username,
      password: hashpassword,
      name: name,
      department_id: department_id,
      email: email,
      designation: designation,
      // phone: phone,
      // emp_type: emp_type,
      // dob: dob,
      // gender: gender,
      // place_birth: place_birth,
      // religion: religion,
      // nationality: nationality,
      // blood_group: blood_group,
      // father_name: father_name,
      // mother_name: mother_name,
      // marital_status: marital_status,
      // date_of_wedding: date_of_wedding,
      // city: city,
      // district: district,
      // pin_code: pin_code,
      // state: state,
      // address: address,
    };

    const saved_user = await User.create(user_data);
    console.log(saved_user)
    const token = jwt.sign( { user_id: saved_user.id }, process.env.JWT_SECRET_KEY , { expiresIn: "5d" });

  
    res.send({ msg: "User Created", token: token, user: saved_user});
    } catch (error) {
    next(error);
  }
};
