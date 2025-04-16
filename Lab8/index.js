const http = require('http');   
const server = http.createServer( (request, response) => {    
     console.log(request.url);
     response.setHeader('Content-Type', 'text/html');
     response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>HTML</title>
        </head>
        <body>
           <h1>hola mundo desde </h1>
        </body>
        </html>
    `);
    //............................................
    console.log("Hola Mundo");
    
    const filesystem = require('fs');
    
    filesystem.writeFileSync('hola.txt', 'Hola mundo desde node');
    
    const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
    
    function calcularSuma(arr) {
        let res = 0;
        for (let item of arr) {
            res += item;
        }
        return res;
    }
    
    function calcularPromedio(arr) {
        const suma = calcularSuma(arr);
        return suma / arr.length;
    }
    
    const sumaTotal = calcularSuma(arreglo);
    const promedio = calcularPromedio(arreglo);
    
    console.log(`La suma total es: ${sumaTotal}`);
    console.log(`El promedio es: ${promedio}`);
    
    filesystem.writeFileSync('resultados.txt', `Suma: ${sumaTotal}\nPromedio: ${promedio}`);
    
    function escribirArchivo(nombreArchivo, texto) {
        filesystem.writeFileSync(nombreArchivo, texto);
    }
    
    escribirArchivo('Act2.txt', 'Nuevo Mundo de holas');
    
    console.log("jojo te hackié");
    console.log("¿En dónde se ejecuta esta línea?");
    
    const te_hackie = () => {
        console.log("jojo te hackié");
    }
    
    setTimeout(te_hackie, 7000);
    
    console.log("¿En dónde se ejecuta esta línea?");
    response.end();
});
server.listen(3000);