const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// CREATE POST
router.post("/",async(req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);

    }catch(error){
        res.status(500).json(error);
    }
})

 
// UPDATE POST  
router.put("/:id",async(req,res)=>{
    if(req.body.postId === req.params.id){
        try{
            const post = await Post.findById(req.params.id)
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },{new:true})
                
                res.status(200).json(updatedPost);
                
            }catch(error){
                res.status(500).json(error);
            }
        }catch(error){
            res.status(404).json("Post not found")
        }
    }else{
        res.status(401).json("Unauthorized access")
    }  
})

// DELETE POST  
router.delete("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(req.body.username === post.username){
            try{
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("Post has been deleted");
                
            }catch(error){
                res.status(500).json(error);
            }
            
        }else{
            res.status(401).json("Unauthorized access")
        } 
    }catch(error){
        res.status(404).json("Post not found")
    } 
})

// GET POST
router.get("/:id",async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;