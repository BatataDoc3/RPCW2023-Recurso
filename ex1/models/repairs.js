var mongoose = require('mongoose')

const viaturaSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    matricula: String
})

const intervencoesSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    descricao: String
})

const repairSchema = new mongoose.Schema( {
    nome: String,
    nif: Number,
    data: String,
    viatura: viaturaSchema,
    nr_intervencoes: Number,
    intervencoes: [intervencoesSchema]
    }, 
    {
        collection: "repairs",
    }
)


module.exports = mongoose.model("repair", repairSchema);

