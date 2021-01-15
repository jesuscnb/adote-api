const Model = require('../models/pet.model');
const Rules = require('../rules/pet.rules');

exports.create = async (req, res) => {
    const validacao = await Rules.validar(req.body);

    if (!validacao.valido) {
        res.status(400).send({
            status: 400,
            messagem: validacao.erros
        });
        return;
    }

    try {
        await Model.create(req.body);
        console.log('Sucesso!');
        res.status(200).send(res.body);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }

};


exports.findAll = async (req, res) => {
    try {
        const data = await Model.find()
            .populate('responsavel')
            .populate('raca');

        res.status(200).send(data);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
};


exports.findById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findById(id);
        res.status(200).send(data);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }

};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.deleteOne({_id: id});
        res.status(200).send(data);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
};













