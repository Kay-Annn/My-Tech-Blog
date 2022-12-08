const router = require ('express').Router();
const{Post, User, Comments} = require('../../models');
const checkAuth = require ('../../utils/auth');

router.post ('/', checkAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            post_name:req.body.post_name, 
            post_description: req.body.post_description,
            user_id:req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (error){
        res.status(400).json(error);
    }
})

router.put('/:id', checkAuth, async (req,res) => {
    // update a post by its `id` value
    Post.update (
      {
        post_description: req.body.post_description,
    },
  
  {
    where:{
      id:req.params.id
    },
  }
  )
  .then ((updatedPost) => {
    res.json(updatedPost)
  })
    .catch((err)=>res.json(err));
  });


  router.delete('/:id', checkAuth, async (req,res) => {
    // update a comment by its `id` value
    Post.destroy ({
    where:{
      id:req.params.id
    },
  }
  )
  .then ((deletedPost) => {
    res.json(deletedPost)
  })
    .catch((err)=>res.json(err));
  });
  