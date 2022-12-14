const router = require("express").Router();
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/post", postRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
