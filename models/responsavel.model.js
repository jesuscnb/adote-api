const mongoose = require("mongoose");

const Responsavel = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    senha : {
        type: String,
        required: true
    },
    uf : {
        type: String
    },
    cidade : {
        type: String
    },
    bairro :{
        type: String
    }
})

module.exports = mongoose.model('Responsavel', Responsavel);
