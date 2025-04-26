const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send("Hola Mundo");
});

const rutasUsuarios = require("./routes/usuarios.routes");
app.use('/usuarios', rutasUsuarios);

const rutasPersonajes = require("./routes/personajes.routes");
app.use('/personajes', rutasPersonajes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
