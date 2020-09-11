const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { UserModel } = require("../models/user");

//register user
router.post('/register', async (req,res)=>{
    
    let checkUser = await UserModel.findOne({ email: req.body.email });

    if(checkUser) {return res.json({ message:'User already exists'});
    }
    
    //hash password
    let salt = await bcrypt.genSalt(10);
    let hashed = await bcrypt.hash(req.body.password, salt);

    let user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: hashed,
    });

    user = await user.save();
    res.json({
        success:true,
        data: user,
    })

});

//Login
router.post('/login', async (req,res)=>{
    let checkUser = await UserModel.findOne({ email: req.body.email });

    if(!checkUser) {
        return res.json({ message:'Invalid email or password.'});
    }

    let validPassword = await bcrypt.compare(req.body.password, checkUser.password);

    if(!validPassword){
        return res.json({
            success:false,
            message:"Invalid email or password.",
        })
    }

    const token = jwt.sign({
        _id: checkUser.id,
        name: checkUser.name,
        email: checkUser.email,
    }, config.get('jwtPrivateKey'));

    return res.json({
        success:true,
        token: token,
    });

});

module.exports = router;