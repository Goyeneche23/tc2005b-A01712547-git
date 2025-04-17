const express = require('express');
const router = express.Router();

router.get('/ruta1', (req, res) => {
    res.send('PAgina 1 del primer modulo');
});

router.get('/ruta2', (req, res) => {
    res.send('Pagina 2 del primer modulo');
});

module.exports = router;