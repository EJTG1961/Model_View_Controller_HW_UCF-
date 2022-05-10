const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", (req, res) => {
  // get all posts for the homepage
  Post.findAll({
    include: [User],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/post/:id", (req, res) => {
  // get a single post
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("single-post", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  // login
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // signup
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;