const mongoose = require("mongoose");
const Repair = require("../models/repairs");

module.exports.list = () => {
    return Repair.find()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  
  module.exports.get = (id) => {
    return Repair.findOne({ nif: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  module.exports.getId = (id) => {
    return Repair.findOne({ _id: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  
  
  module.exports.getRepairOnYear = (year) => {
    return Repair.find({
        data: { $regex: `^${year}-\\d{2}-\\d{2}` },
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  
  module.exports.getRepairsByMarca = (marca) => {
    return Repair.find({"viatura.marca": marca })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  module.exports.getRepairsMatriculas = () => {
    return Repair.distinct("viatura.matricula")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  module.exports.getRepairsInterv = () => {
    return Repair.distinct("intervencoes")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  module.exports.create = (repair) => {
    return new Repair({
      nome: repair.nome,
      nif: repair.nif,
      data: repair.data,
      viatura: repair.viatura,
      nr_intervencoes: repair.nr_intervencoes,
      intervencoes: repair.intervencoes
    }).save();
  };


  module.exports.delete = (id) => {
    return Repair.deleteOne({ nif: id });
  };