const Personaje = require("../models/personajes.models");

module.exports.test_json = async (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Prueba JSON de personajes"
    });
};

module.exports.index = async (req, res) => {
    let personajes = Personaje.fetchAll();
    res.render("./personajes/personajes", {
        personajes: personajes
    });
};

module.exports.guardar = async (req, res) => {
    const nuevoPersonaje = new Personaje(req.body.nombre, req.body.casa);
    nuevoPersonaje.save();
    let personajes = Personaje.fetchAll(); 
    res.render("./personajes/personajes", {
        personajes: personajes
    });};

