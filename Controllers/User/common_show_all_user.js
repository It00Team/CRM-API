const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../Models/Users/user.js");
const Department = require("../../Models/Users/department.js");
const dotenv = require('dotenv').config();

exports.show_all_user_profile = async(req, res, next) =>{

    try {
        
        const user = await User.findAll({include : [Department]});
        res.json(user);

    } catch (error) {
        next(error);
    }
};


exports.get_one_user_profile = async(req, res, next) =>{

    try {
        const id = req.params.id;
        const user = await User.findByPk(id, {include : [Department]});
        res.json(user);

    } catch (error) {
        next(error);
    }
};