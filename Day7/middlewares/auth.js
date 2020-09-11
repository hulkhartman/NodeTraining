function checkAuth(req,res,next){
    console.log('Check the authentication...');
    next();
}

module.exports = checkAuth;