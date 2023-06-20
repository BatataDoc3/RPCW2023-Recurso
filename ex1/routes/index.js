const express = require("express");
const router = express.Router();
const Repair = require("../controllers/repairs");

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//});


router.get("/repairs", function (req, res, next) {
  let ano = req.query.ano;
  let marca = req.query.marca;
  if (ano) {
    Repair.getRepairOnYear(ano)
      .then((dados) => res.send(dados))
      .catch((err) => {
        console.log(err);
        res.status(500).send(`Erro na listagem de reparações: ${err}`);
      });
  } else if (marca) {
    Repair.getRepairsByMarca(marca)
      .then((dados) => res.send(dados))
      .catch((err) => {
        console.log(err);
        res.status(500).send(`Erro na listagem de reparações: ${err}`);
      });
  } else {
    Repair.list()
      .then((dados) => res.send(dados))
      .catch((err) => {
        console.log(err);
        res.status(500).send(`Erro na listagem de reparações: ${err}`);
      });
  }
});

router.get("/repairs/matriculas", function (req, res, next) {
  Repair.getRepairsMatriculas()
    .then((dados) => res.send(dados))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro na listagem de reparações: ${err}`);
    });
});

router.get("/repairs/interv", function (req, res, next) {
  Repair.getRepairsInterv()
    .then((dados) => res.send(dados))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro na listagem de reparações: ${err}`);
    });
});


router.get("/repairs/:id", function (req, res, next) {
  Repair.get(req.params.id)
    .then((dados) => res.send(dados))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro na listagem de reparações: ${err}`);
    });
});

router.get("/repairs/id/:id", function (req, res, next) {
  Repair.getId(req.params.id)
    .then((dados) => res.send(dados))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro na listagem de reparações: ${err}`);
    });
});

router.post("/repairs", function (req, res, next) {
  Repair.create(req.body)
    .then((dados) => res.send(dados))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro na inserção de reparação: ${err}`);
    });
});

router.delete("/repairs/:id", function (req, res, next) {
  Repair.delete(req.params.id)
    .then((dados) => res.send(dados))
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Erro na remoção de contrato: ${err}`);
    });
});


module.exports = router;
