const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/ruta1', (req, res) => {
    res.send('Modulo 2 primera pagina');
});

router.get('/ruta2', (req, res) => {
    res.send('Hola mundo desde la segunda pagina del modulo 2');
});

router.post('/guardar', (req, res) => {
    const datos = req.body;
    res.json({ mensaje: 'Datos recibidos', datos });
});

module.exports = router;