const router = require("express").Router();
const projectsRoutes = require("./projects.js");

// Projects routes
router.use("/projects", projectsRoutes);

module.exports = router;
