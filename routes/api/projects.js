const router = require("express").Router();
const tasksController = require("../../controller/taskscontroller1");

// Matches with "/api/books"
router.route("/")
  .get(tasksController.findAll)
  .post(tasksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = router;