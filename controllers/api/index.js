// const { route } = require("../../../.Main/controllers/api");

const router = require("express").Router();

// Finish the required pathing for these variables
// const userRoutes = ;
const userRoutes = require("./user-routes");
// const postRoutes = ;
const postRoutes = require("./post-routes");
// const commentRoutes = ;
const commentRoutes = require("./comment-routes");

// write the rest of the router.use routes
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;