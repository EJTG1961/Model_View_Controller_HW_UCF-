const router = require("express").Router();

// finish the required routes
// const apiRoutes =
const apiRoutes = require("./api");
// const homeRoutes =
const homeRoutes = require("./home-routes.js");
// const dashboardRoutes =
const dashboardRoutes = require("./dashboard-routes.js");

router.use("/", homeRoutes);
// finish the other needed routes with router.use()
// api routes
router.use("/api", apiRoutes);
// dashboard routes
router.use("/dashboard", dashboardRoutes);

// should we create a catch all


module.exports = router;