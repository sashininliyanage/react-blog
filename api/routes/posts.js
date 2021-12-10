const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// CREATE POST
router.post("/",async(req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = newPost.save();
        res.status(200).json(savedPost);

    }catch(error){
        res.status(500).json(error);
    }
})

 
// DALETE
router.delete("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id)
            try{
                await Post.deleteMany({username: user.username});

                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Your account has been deleted")
                
            }catch(error){
                res.status(500).json(error);
            }
        }catch(error){
            res.status(404).json("User not found")
        }
    }else{
        res.status(401).json("Unauthorized access")
    }  
})

// GET USER
router.get("/:id",async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc
        res.status(200).json(others)
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;