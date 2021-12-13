const router = require('express').Router();
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

// GET NEW POSTS
// router.get("/new",async(req,res) => {
//     try{
//         const post = await Post.find().sort( { "createdAt": 1 } ).limit(5);
//         res.status(200).json(post)
//     }catch(error){
//         res.status(500).json(error)
//     }
// })


// GET ALL POSTS
router.get("/",async(req,res) => {
    const username = req.query.user;
    const category = req.query.category;
    const newPosts = req.query.new;
    try{
        let posts;
        if(username){
            posts= await Post.find({username})
        }else if(category){
            posts = await Post.find({category:{
                $in:[category]
            }})
        }else if(newPosts){
            posts = await Post.find().sort( { "createdAt": -1 } ).limit(3);
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts)

    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;