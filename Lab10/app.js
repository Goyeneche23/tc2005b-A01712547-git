const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/formulario', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'info.html'));
});

app.post('/formulario', (req, res) => {
  const datos = `Nombre: ${req.body.nombre}, Mensaje: ${req.body.mensaje}\n`;
  fs.appendFile('datos.txt', datos, (err) => {
    if (err) throw err;
    res.send('<h2>Datos recibidos y guardados en datos.txt</h2><a href="/">volver</a>');
  });
});


app.use((req, res) => {
    res.status(404).send("Error: 404 - Pagina no encontrada");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
