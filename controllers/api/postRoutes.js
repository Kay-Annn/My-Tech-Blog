const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const checkAuth = require('../../utils/auth');

router.post('/newpost', async (req, res) => {
  try {
    const addPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    }
    );

    res.status(200).json(addPost);

  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})


router.put('/:id', checkAuth, async (req, res) => {
  // update a post by its `id` value
  try {
    const postInfo = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },

      {
        where: {
          id: req.params.id
        },
      });

      res.status(200).json(postInfo);

  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }

})

router.delete('/:id', checkAuth, async (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    },
  }
  )
    .then((deletedPost) => {
      res.json(deletedPost)
    })
    .catch((err) => res.json(err));
});

module.exports = router;