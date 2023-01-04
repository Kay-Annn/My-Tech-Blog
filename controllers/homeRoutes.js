const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const checkAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'created_at',
        'content'
      ],
      include: [
        {
          model: Comments,
          attributes: ['id',
            'comment_content',
            'user_id',
            'post_id',
            'created_at']
        },
        {
          model: User,
          attributes: ['username'],
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", checkAuth, async (req, res) => {
  try {
    console.log("I am here ghghbh")
    const singlePost = await Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        "id",
        "title",
        "content",
        "created_at"
      ],
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"]
          }
        },
        {
          model: Comments,
          attributes: [
            "comment_content",
            "created_at"
          ],
          include: {
            model: User,
            attributes: {
              exclude: ["password"]
            }
          }
        }
      ]
    });

    console.log(singlePost)

    const posts = singlePost.get({ plain: true });

    if (posts){
    res.render('postById', {
      posts,
      logged_in: req.session.logged_in
    });
  }
  else{
    res.status(404).json({ message: "No post with that ID" });
    return;
  }
  }
   catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', checkAuth, async (req, res) => {
  try {
    const postInfo = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'content'
      ],
      include: [
        {
          model: Comments,
          attributes: ['id',
            'comment_content',
            'user_id',
            'post_id',
            'created_at']
        },
        {
          model: User,
          attributes: ['username'],
        }
      ],
    });
    const post = postInfo.map((post) => post.get({ plain: true }));

    if (post) {
      res.render('dashboard', {
        post,
        logged_in: true
      });
    }
    else {
      res.redirect('/login');
    }
  }
  catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/newpost', checkAuth, (req, res) => {
  // If the user is already logged in, redirect the request to newpost route
  res.render('newpost', {
    logged_in: true
  }
  );
});

module.exports = router;