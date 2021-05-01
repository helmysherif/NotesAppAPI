const jwt = require("jsonwebtoken");
module.exports = (req,res,next) => {
    const { token } = req.body;
    jwt.verify(token , 'key' , async(err , decodedToken) => {
        if(err)
        {
            res.json({err})
        } else {
            req.userID = decodedToken.userID
            next()
        }
    });
}