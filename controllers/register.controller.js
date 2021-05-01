const { validationResult } = require("express-validator");
const validation = require("../validator/register.validation");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
module.exports.handleRegister = async(req, res) => {
    const {name , email , password , confirmPassword} = req.body;
    let errors = validationResult(req);
    if(errors.isEmpty())
    {
        let user = await userModel.findOne({email});
        if(user)
        {
            res.json({message : 'email already exists'})
        } else {
            bcrypt.hash(password , 7 , async (err,hashedPassword) => {
                await userModel.insertMany({name , email , password:hashedPassword})
                res.json({message : 'success'})
            })
        }
    } else {
        let error = errors.array()[0].msg;
        if(password !== confirmPassword)
        {
            error = "password and confirmedPassword are Not matched"
            res.json({'errors' : error});
        } else {
            error = "password must be eight characters including one uppercase letter, one special character and alphanumeric characters"
            res.json({'errors' : error});
        }
    }
}