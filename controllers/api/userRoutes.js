const router = require('express').Router();
const { User, Post, Comments } = require('../../models');

router.post('/getUser', async (req, res) => {
  try {
    // check user e-mail exist
    const userInfo = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userInfo) {
      res.status(400).json({ message: 'email incorrect, please try again' });
      return;
    }

    const validPassword = userInfo.checkPassword(req.body.password);

    if (!validPassword) {
      console.log(req.body.password)
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userInfo.username;
      req.session.logged_in = true;

      res.status(200).json(userInfo);
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    console.log(req.body.username)
    const userInfo = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    );

    console.log(userInfo)

    req.session.save(() => {
      req.session.user_id = userInfo.username;
      req.session.logged_in = true;

      res.status(200).json(userInfo);
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(200).end();
    });

  } else {
    res.status(404).end();
  }
});

router.post('/newpost', async (req, res) => {
  try {
    const addPost = await Post.create({
    Title: req.body.post_name,
    Content: req.body.post_description
    }
    );

  } catch (error) {
    console.log(err)
    res.status(500).json(err);
  }

})

module.exports = router;