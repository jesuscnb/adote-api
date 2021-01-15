const mongoose = require("mongoose");

const Pet = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sexo : {
        type: String,
        required: true
    },
    especie : {
        type: String,
        required: true
    },
    raca : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Raca',
        required: true
    },
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsavel',
        required: true
    },
    tipo : {
        type: String,
        required: true
    },
    porte :{
        type: String,
        required: true
    },
    idade : {
        type: String
    },
    descricao : {
        type: String
    },
    capa : {
        type: String
    },
    fotos : {
        type: Array
    }
})

module.exports = mongoose.model('Pet', Pet);
