const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register
router.post("/register",async(req,res)=>{
    try{
        const username = await User.findOne({username: req.body.username});
        const useremail = await User.findOne({email: req.body.email});

        if(username){
            res.status(400).json("User name is in use");
        }else if(useremail){
            res.status(400).json("The email address is already in use");
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password,salt);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            })
            const user = await newUser.save();

            res.status(200).json(user);
        }

    }catch(error){
        res.status(500).json(error);
    }
})

// Login
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        !user && res.status(400).json("wrong credentials!")
        const validate = await bcrypt.compare(req.body.password,user.password)
        !validate && res.status(400).json("wrong credentials!")

        const {password,...others} = user._doc;
        res.status(200).json(others)
        
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;