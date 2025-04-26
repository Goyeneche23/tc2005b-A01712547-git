const express = require('express');
const router = express.Router();
const personajesController = require('../controllers/personajes.controllers');

router.get('/personajes', personajesController.index);
router.post('/personajes', personajesController.guardar);
router.get('/testjson', personajesController.test_json);

module.exports = router;
