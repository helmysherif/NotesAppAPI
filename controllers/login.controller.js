const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
module.exports.handleLogin = async(req, res) => {
    const {email , password} = req.body;
    let user = await userModel.findOne({email});
    if(user)
    {
        const match = await bcrypt.compare(password , user.password);
        if(match)
        {
            let token = jwt.sign({userID : user._id,role : 'user',username:user.name},'key')
            res.json({message : 'success', token})
        } else {
            res.json({message : 'incorrect Password'})
        }
    } else {
        res.json({message : "email doesn't exists"});
    }
}