const router = require("express").Router();
const listRoutes = require("./list");

// routes
router.use("/list", listRoutes);
router.use("/signin", signinRoutes);

module.exports = router;