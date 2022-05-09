const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
      const newCommentData = await Comment.findAll({
        include: [
          {
            model: Post,
            attributes: ["comment", "description"],
          },
        ],
      });

      const comments = newCommentData= newCommentData.map((posts) =>
        gallery.get({ plain: true })
      );

      res.render("homepage", {
        comments,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get("/post/:id", async (req, res) => {
    // get a single post
    try {
      const newCommentData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: [
              "id",
              "username",
              "password",
              "description",
            ],
          },
        ],
      });

      const gallery = newCommentData.get({ plain: true });
      res.render("comment", { comment, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
    // login
});

router.get("/signup", (req, res) => {
    // signup
})

module.exports = router;