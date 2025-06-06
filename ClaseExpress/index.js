const http = require("http");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const R1 = require('./modules/mo1');
const R2 = require('./modules/mo2');

//Middleware
app.use((request, response, next)=>{
    console.log("Autenticación!");
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/mo1', R1);
app.use('/mo2', R2);

/*app.use((request,response,next)=>{
    console.log("Verificación de middleware!");
    response.send("Hola Mundo"); //Mandar la respuesta
});*/

app.get('/',(request,response,next)=>{
    response.setHeader('Content-type','text/plain');
    response.send("GET URL index /");
});

app.post('/',(request,response,next)=>{
    response.setHeader('Content-type','text/plain');
    response.send("POST URL index /");
});

app.get('/unicorn',(request,response,next)=>{
    response.setHeader('Content-type','text/plain');
    response.send("Los unicornios son reales");
});

app.get('/form_method',(req,res)=>{
    res.setHeader('Content-type','text/html');
    const html = fs.readFileSync(path.resolve(__dirname,"./form.html"),'utf8');
    res.write(html);
    res.end();
});

app.post('/form_method',(req,res)=>{
    const indice = Number(req.body.indice);
    console.log(indice);
    const imprimir = req.body.imprimir;
    console.log(imprimir);

    res.setHeader('Content-type','application/json');
    res.statusCode = 200;
    res.write('{code:200, msg:"Ok POST}');
    res.end();
});


app.get('/MiPag',(req,res)=>{
    res.setHeader('Content-type','text/html');
    const html = fs.readFileSync(path.resolve(__dirname,"./miPag.html"),'utf8');
    res.write(html);
    res.end();
});

app.post('/MiPag',(req,res)=>{
    const indice = Number(req.body.indice);
    console.log(indice);
    const imprimir = req.body.imprimir;
    console.log(imprimir);

    res.setHeader('Content-type','application/json');
    res.statusCode = 200;
    res.write('{code:200, msg:"Ok POST}');
    res.end();
});

app.use((req, res) => {
    res.status(404).send("Error: 404 - Pagina no encontrada");
});

const server = http.createServer((request,response)=>{
    console.log(request.url);
});

app.listen(3000);