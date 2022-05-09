const router = require("express").Router();

// finish the required routes
// const apiRoutes =
const apiRoutes = require("./api");
// const homeRoutes =
const homeRoutes = require("./homeRoutes.js");
// const dashboardRoutes =
const dashboardRoutes = require("./dashboard-routes.js");

router.use("/", homeRoutes);
// finish the other needed routes with router.use()
// api routes
router.use("/api", apiRoutes);
// dashboard routes
router.use("/dashboard", dashboardRoutes);

// create a catch all
router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;