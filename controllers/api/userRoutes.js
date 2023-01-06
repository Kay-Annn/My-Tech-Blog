const router = require('express').Router();
const { User, Post, Comments } = require('../../models');
const checkAuth = require('../../utils/auth');

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
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userInfo.id;
      req.session.logged_in = true;

      res.status(200).json(userInfo);
    });

  console.log(req.session.user_id)

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const userInfo = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    );

    

    req.session.save(() => {
      req.session.user_id = userInfo.id;
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


module.exports = router;