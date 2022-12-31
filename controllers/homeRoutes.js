const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const checkAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        'id',
        'post_name',
        'created_at',
        'post_description'
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

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('Post', {
      ...Post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use checkAuth middleware to prevent access to route
router.get('/user', checkAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('user', {
      ...user,
      logged_in: true
    });
  } catch (err) {
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

  const postInfo = await Post.findAll({
    attributes: [
      'id',
      'post_name',
      'created_at',
      'post_description'
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

  if (postInfo) {

    res.render('dashboard', {
      post,
      logged_in: true
    });
  }
  else {
    res.redirect('/login');
  }

});


router.get('/newpost', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/newpost');
    return;
  }
  res.render('newpost');
});

module.exports = router;