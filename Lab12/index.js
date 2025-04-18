const http = require("http");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");
app.set("views","views");

app.get('/form_method',(req,res)=>{
    res.setHeader('Content-type','text/html');
    const html = fs.readFileSync(path.resolve(__dirname,"./form.html"),'utf8');
    res.write(html);
    res.end();
});

app.get('/test_html', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Código en HTML</title>
        </head>
        <body>
            <h1>hola mundo desde express</h1>
        </body>
        </html>
    `);
    response.end(); 
});

app.get('/test_ejs', (request,response)=>{
    let frases= [];
    frases.push("Frase 1");
    frases.push("Frase 2");
    frases.push("Frase 3");
    frases.push("Frase 4");
    frases.push("Frase 5");
    response.render("index",{
        frases_a_escribir: frases
    });
})

app.get('/formulario', (req, res) => {
    res.render('formulario');
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

const server = http.createServer((request,response)=>{
    console.log(request.url);
});

app.listen(3000);