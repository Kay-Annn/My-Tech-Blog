const router = require ('express').Router();
const{Comments} = require('../../models');
const checkAuth = require ('../../utils/auth');

router.post('/', checkAuth, async (req,res) => {
    try {
        const newComment = await Comments.create({
            comment_content:req.body.comment_content, 
            post_id: req.body.post_id,
            user_id:req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (error){
        res.status(400).json(error);
    }
});


router.put('/:id', checkAuth, async (req,res) => {
  // update a comment by its `id` value
  Comments.update (
    {
        comment_content: req.body.comment_content,
  },

{
  where:{
    id:req.params.id
  },
}
)
.then ((updatedComment) => {
  res.json(updatedComment)
})
  .catch((err)=>res.json(err));
});


module.exports = router;

