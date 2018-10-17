const router = require("express").Router();
const signInRoutes = require("./signin");

// Book routes
router.use("/signin", signInRoutes);

module.exports = router;
