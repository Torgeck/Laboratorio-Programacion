const express = require("express");
const router = express.Router();
const beersController = require("../../controllers/beersController");

router
  .route("/")
  .get(beersController.getAllBeers)
  .post(beersController.createNewBeer)
  .put(beersController.updateBeer)
  .delete(beersController.deleteBeer);

router.route("/:id").get(beersController.getBeer);

module.exports = router;
