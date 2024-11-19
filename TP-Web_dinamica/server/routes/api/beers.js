const express = require("express");
const router = express.Router();
const beersController = require("../../controllers/beersController");

router
  .route("/")
  .get((req, resp) => {
    let inicio = req.query.inicio;
    let fin = req.query.fin+1;
    if(inicio<fin){
      if (inicio == undefined) {
        inicio = 0;
      }
      if (fin == undefined) {
        fin = inicio + 5;
      }
  
      //El corte incluye a fin
      let colBeers = beersController.getRangeBeer(inicio, fin);
      resp.status(200);
      resp.json(colBeers);
    }else{
      resp.status(400)
      resp.send("Error: Inicio es mayor que final")
    }
  })
  .post((req, resp) => {

    let correcto=beersController.createNewBeer(req.body);
    if(correcto){
      resp.status(200);
      resp.sendStatus(200);
    }else{
      notFound(res, "Nombre y descripcion no pueden ser vacios");
      //resp.status(400);
      //resp.sendStatus(400);
    }
  })
  .put(beersController.updateBeer)
  .delete(beersController.deleteBeer);

router.route("/:id").get(beersController.getBeer);

module.exports = router;
