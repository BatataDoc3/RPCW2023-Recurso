var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get("/", function (req, res, next) {
  let d = new Date().toISOString().substring(0, 16);
  axios
    .get("http://localhost:16016/repairs")
    .then((ans) => {
      console.dir(ans.data);
      res.render("index", { clist: ans.data, d: d });
    })
    .catch((err) => {
      res.render("error", { error: err });
      console.log("Erro na obtenção da lista de reparações: " + err);
    });
});


router.get("/:marca", function (req, res, next) {
  let d = new Date().toISOString().substring(0, 16);
  axios
    .get("http://localhost:16016/repairs?marca=" + req.params.marca)
    .then((ans) => {
      console.dir(ans.data);
      const data = [];
      
      for(let i = 0; i < ans.data.length; i++) {
        if (!data.includes(ans.data[i].viatura.modelo)){
          data.push(ans.data[i].viatura.modelo)
        }
      }
      
      console.log(data);
      res.render("marcas", { r: ans.data, d: d, modelos: data, marca: req.params.marca});
    })
    .catch((err) => {
      res.render("error", { error: err });
      console.log("Erro na obtenção da lista de reparações: " + err);
    });
});

router.get("/reparacoes/:id", function (req, res, next) {
  let d = new Date().toISOString().substring(0, 16);
  axios
    .get("http://localhost:16016/repairs/id/" + req.params.id)
    .then((ans) => {
      console.dir(ans.data);
      //res.render("index", { clist: ans.data, d: d });
    })
    .catch((err) => {
      res.render("error", { error: err });
      console.log("Erro na obtenção da lista de reparações: " + err);
    });
});


module.exports = router;
