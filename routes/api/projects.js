const router = require("express").Router();
const booksController = require("../../controllers/projectsController");

// Matches with "/api/books"
router.route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

module.exports = router;