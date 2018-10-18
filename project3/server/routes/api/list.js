const router = require("express").Router();
const appointsController = require("../../controllers/appointsController");

// Matches with "/api/appoints"
router.route("/")
  .get(appointsController.findAll)
  .post(appointsController.create);

// Matches with "/api/appoints/:id"
router
  .route("/:id")
  .get(appointsController.findById)
  .put(appointsController.update)
  .delete(appointsController.remove);

module.exports = router;