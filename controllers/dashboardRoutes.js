const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    // we want to go ahead and finishing the routing to get all the posts
    Post.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        // Serialize data so the template can read it
        res.render("all-posts-admin", {
          layout: "dashboard",
          posts,
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });
      

router.get("/new", withAuth, (req, res) => {
  // for showing new posts to the user
  res.render("new-post", {
    layout: "dashboard",
  });
});  


router.get("/edit/:id", withAuth, async (res, req) => {
  // To be able to find posts by primary key and render the edit post on the dashboard
  Post.findByPk(req.params.id)
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          layout: "dashboard",
          post,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;