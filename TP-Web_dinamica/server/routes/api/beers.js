const express = require("express");
const router = express.Router();
const beersController = require("../../controllers/beersController");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router
  .route("/")
  .get((req, res) => {
    let colBeer = beersController.getRangeBeer(req.query.inicio, req.query.fin);

    if (colBeer.length > 0) {
      res.status(200).json(colBeer);
    } else {
      res.status(404).json({ error: "ERROR" });
    }
  })
  .post(async (req, res) => {
    console.log(req.body);
    let correcto = await beersController.createNewBeer(req.body);
    if (correcto) {
      res.status(200).json({ exito: "Exito" });
    } else {
      res.status(404).json({ error: "Nombre o descripcion vacios" });
    }
  })
  .put(beersController.updateBeer)
  .delete(beersController.deleteBeer);

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  let beer = beersController.getBeer(id);

  if (!beer) {
    res.status(404).json({ error: `Cerveza con id ${id} no encontrada` });
  } else {
    res.status(200).json(beer);
  }
});

module.exports = router;
