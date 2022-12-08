const router = require('express').Router();
const postRoutes = require('./api/postRoutes');
const userRoutes = require('./api/userRoutes');
const commentRoutes = require('./api/commentRoutes');

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/comments', commentRoutes);




module.exports = router;
