const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");

const authenticate = async (req, res, next) => {
  /* if (true){
        next();
    }else{
        res.status(400).send({error : 'not authen'})
    }*/
  try {
    const token = req.cookies.jsonwebToken;
    //console.log('Got' , token);
    const verifyToken= jwt.verify(token, process.env.SECRET_KEY);
    //console.log('is verified', verifyToken);
    const verifiedUser = await Users.findOne({
      _id: verifyToken._id,
      "token.token": token,
    });
    //console.log('before', req.user);
    if (!verifiedUser) {
      throw new Error("user not found");
    }
    req.token = token;
    req.userId = verifiedUser._id;
    req.user = verifiedUser;
    // console.log('verifiedUser', verifiedUser); */
    next();
  } catch (err) {
    res.status(401).send("Unauthorised access");
    console.log(err);
  }
};

module.exports = authenticate;
