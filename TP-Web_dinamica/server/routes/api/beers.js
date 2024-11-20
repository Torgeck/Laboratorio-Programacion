const express = require("express");
const router = express.Router();
const beersController = require("../../controllers/beersController");

router
  .route("/")
  .get(beersController.getRangeBeer)
  .post((req, resp) => {
    let correcto = beersController.createNewBeer(req.body);
    if (correcto) {
      resp.status(200);
      resp.sendStatus(200);
    } else {
      notFound(res, "Nombre y descripcion no pueden ser vacios");
      //resp.status(400);
      //resp.sendStatus(400);
    }
  })
  .put(beersController.updateBeer)
  .delete(beersController.deleteBeer);

//router.route("/:id").get(beersController.getBeer);

module.exports = router;
