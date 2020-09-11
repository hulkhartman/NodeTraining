const jwt = require('jsonwebtoken');
const config = require('config');

function checkAuth(req, res, next) {
  //console.log("Check the authentication...");
  const token = req.header("auth-token");
  //console.log("checkAuth -> token", token)
  //check if token exits
  if(!token){
    return res.json({
      success: false,
      message:"Access Denied, no token",
    });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.currentUser = decoded;
    //console.log("checkAuth -> decoded", decoded);

  } catch (error) {
    res.json({
      sucess:false,
      message:"Invalid token or request",
    });
  }

  next();
}

module.exports = checkAuth;
