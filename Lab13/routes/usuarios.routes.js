const express = require("express");
const path = require("path"); //Viene con NodeJS no instalar
const fs = require("fs"); //Viene con NodeJS no instalar
const router = express.Router();
const controller = require("../controllers/usuarios.controllers")


router.get("/obtener_usuarios", controller.index);
router.get("/test", controller.test_json);

module.exports = router;