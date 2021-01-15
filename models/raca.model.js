const mongoose = require("mongoose");

const Raca = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Raca', Raca);
