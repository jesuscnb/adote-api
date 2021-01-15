module.exports = app => {
    const entity = require("../controllers/raca.controller");

    let router = require("express").Router();
    router.post("/", entity.create);
    router.get("/", entity.findAll);
    router.get("/:id", entity.findById);
    router.delete("/:id", entity.delete);
    app.use('/api/raca', router);
};
