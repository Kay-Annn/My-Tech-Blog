const router = require ('express').Router();
const{Post, User, Comments} = require('../../models');
const checkAuth = require ('../../utils/auth');

router.post('/newpost', async (req, res) => {
  console.log("I am here", req.session)
    try {
      const addPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
      }
      );
  
       req.session.save(() => {
        req.session.logged_in = true;
  
        res.status(200).json(addPost);
      });
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }
  })

  // router.get('/:id', async (req, res) => {
    
  //   try {
  //     const postInfo = await Post.findOne({
  //       attributes: [
  //         'id',
  //         'title',
  //         'created_at',
  //         'content'
  //       ],
  //       where: {
  //         id: req.params.id
  //       },
  //       include: [
  //         {
  //           model: Comments,
  //           attributes: ['id',
  //             'comment_content',
  //             'user_id',
  //             'post_id',
  //             'created_at']
  //         },
  //         {
  //           model: User,
  //           attributes: ['username'],
  //         }
  //       ],
  //     });
  
  //     if (!postInfo) {
  //       res.status(404).json({message:"No post available with the requested id"});
  //       return
  //     }

  //     console.log(postInfo)

  //     req.session.save(() => {
  //       req.session.logged_In = true;
  //       res.status(200).json(postInfo);
  //     });
  //   }
  //   catch (err) {
  //     console.log(err)
  //     res.status(500).json(err);
  //   }
  // });

// router.put('/:id', checkAuth, async (req,res) => {
//     // update a post by its `id` value
//     Post.update (
//       {
//         content: req.body.content,
//     },
  
//   {
//     where:{
//       id:req.params.id
//     },
//   }
//   )
//   .then ((updatedPost) => {
//     res.json(updatedPost)
//   })
//     .catch((err)=>res.json(err));
//   });


//   router.delete('/:id', checkAuth, async (req,res) => {
//     // update a comment by its `id` value
//     Post.destroy ({
//     where:{
//       id:req.params.id
//     },
//   }
//   )
//   .then ((deletedPost) => {
//     res.json(deletedPost)
//   })
//     .catch((err)=>res.json(err));
//   });
  module.exports = router;