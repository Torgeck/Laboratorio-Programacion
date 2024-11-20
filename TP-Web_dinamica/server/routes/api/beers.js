const express = require("express");
const router = express.Router();
const beersController = require("../../controllers/beersController");

router.use(express.json());
router.use(express.urlencoded());

const notFound = (res, msg) => {
  res.status(400).json({ message: msg });
};

router
  .route("/")
  .get((req, res) => {
    let colBeer = beersController.getRangeBeer(req.query.inicio, req.query.fin);

    console.log(colBeer);

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
      notFound(res, "Nombre o descripcion vacíos");
    }
  })
  .put(beersController.updateBeer)
  .delete(beersController.deleteBeer);

router
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    let beer = beersController.getBeer(id);

    if (!beer) {
      notFound(res, `Cerveza con ID ${id} no encontrada`);
    } else {
      res.status(200).json(beer);
    }
  })
  .put((req, res) => {
    const id = req.params.id;

    if (id != undefined) {
      let exito = beersController.updateBeer(id, req.body);

      if (exito) {
        res.status(200).json({ exito: "true" });
      } else {
        notFound(res, `Cerveza con ID ${id} no encontrada`);
      }
    }
  })
  .delete((req, res) => {
    const id = req.params.id;

    if (id != undefined) {
      let exito = beersController.deleteBeer(id);
      if (exito) {
        res.status(200).json({ exito: true });
      } else {
        notFound(res, `Cerveza con ID ${id} no encontrada`);
      }
    }
  });

module.exports = router;
