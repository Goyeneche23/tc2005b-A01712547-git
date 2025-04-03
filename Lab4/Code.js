let log =console.log();
//---------Problema Tabla con Cubos y Cuadrados--------------------------------
function Problema1() {
    const numero = parseInt(document.getElementById('numProblema1').value); //Conv a Num y guarda variable de lo dado por el user
    const impresion = document.getElementById('resultado');
    
    
    let tablaHTML = "<table border='3'><tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>";
    //Crea Tabla  con las distintas columnas del problema
    for (let i = 1; i <= numero; i++) { //Bucle hasta cubrir todos los numeros hasta llegar al dado
        tablaHTML += `<tr><td>${i}</td><td>${i*i}</td><td>${i*i*i}</td></tr>`;
    } //Realiza las operaciones (num), Num*Num, Num*num*num
    
    tablaHTML += "</table>"; //Cierre Tabla
    impresion.innerHTML = tablaHTML;
}
//---------Problema Tabla con Cubos y Cuadrados--------------------------------
// --------------Verificacion suma de dos num aleatorios-----------------------
function getRandom() {
    return Math.random();
}
function generar(){
    const impPro = document.querySelector('.Process');

    const num1 = getRandom();
    const num2 = getRandom();
    suma = num1 + num2;

    impPro.innerHTML = `num generados: ${num1} y ${num2}`;
}


function Problema2(){
    const nuro = parseInt(document.getElementById('numProblema2').value);
    const impresion = document.querySelector('.resultado2');

    let result="";
    if (suma === nuro){
        result = "TodoJoya";
    }else{
        result = "Todo Mal";
    }
    impresion.innerHTML=result;
}
// --------------Verificacion suma de dos num aleatorios-----------------------

//--------------Numeros Negativos en Arreglo-----------------------------------
function Problema3(){
    const arreglo = [0,5,7,-2,6,-8,-98,45,0,2,0,-1,5];
    let masZero=[];
    let menosZero=[];
    let Zeros=[];
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] === 0){
            Zeros.push(arreglo[i]);
        }else if(arreglo[i] < 0){
            menosZero.push(arreglo[i]);
        }else{
            masZero.push(arreglo[i]);
        }
    }
    let html = `
                <h3>Resultados:</h3>
                <p>Num positivos: ${masZero.join(', ')}</p>
                <p>Num negativos: ${menosZero.join(', ')}</p>
                <p>Zeros: ${Zeros.join(', ')}</p>
            `;
    document.querySelector('.resultado3').innerHTML = html;
}
//--------------Numeros Negativos en Arreglo-----------------------------------
//--------------promedios------------------------------------------------------
function Problema4(){
    const imp4 = document.querySelector('.resultado4');

    const arreglo4 = [0,5,7,-2,6,-8,98,45,0,2,0,-1,5];
    let Total=0;
    let Contador=0;
    for(let i = 0; i < arreglo4.length; i++){
        Total = Total + arreglo4[i];
        Contador = Contador +1;
    }
    let promedio = Total/Contador;
    imp4.innerHTML=promedio;

}
//--------------promedios------------------------------------------------------
//---------------NumInverso----------------------------------------------------
function Problema5(){
    const numInv = parseInt(document.getElementById('numInv5').value);
    const imp5 = document.querySelector('.resultado5');

    let numeroInvertido = '';
            
    const numStr = numInv.toString();
    
    for (let i = numStr.length - 1; i >= 0; i--) {
        numeroInvertido += numStr[i];
    }

    imp5.innerHTML = `El número invertido es: ${numeroInvertido}`;
}

//---------------NumInverso----------------------------------------------------
//---------------Problema 6----------------------------------------------------
function crearMiembroFamilia(nombre, padre, madre) {
    return {
        nombre: nombre,
        padre: padre || null,
        madre: madre || null
    };
}

function obtenerInfo(miembro) {
    return `
    <div style="border:1px solid #000; margin:10px; padding:10px;">
        <h3>${miembro.nombre}</h3>
        <p>Padre: ${miembro.padre?.nombre || 'Desconocido'}</p>
        <p>Madre: ${miembro.madre?.nombre || 'Desconocida'}</p>
    </div>`;
}

function verAncestros(miembro) {
    let html = `<div style="margin-left:20px;"><h4>Ancestros:</h4><ul>`;
    
    if (miembro.padre) {
        html += `<li>Padre: ${miembro.padre.nombre}</li>`;
        if (miembro.padre.padre) {
            html += `<li>Abuelo paterno: ${miembro.padre.padre.nombre}</li>`;
        }
    }
    
    if (miembro.madre) {
        html += `<li>Madre: ${miembro.madre.nombre}</li>`;
        if (miembro.madre.padre) {
            html += `<li>Abuelo materno: ${miembro.madre.padre.nombre}</li>`;
        }
    }
    
    return html + `</ul></div>`;
}

const miembrosStark = (function() {
    const rickard = crearMiembroFamilia("Rickard Stark");
    const lyarra = crearMiembroFamilia("Lyarra Stark");
    const eddard = crearMiembroFamilia("Eddard Stark", rickard, lyarra);
    const lyana = crearMiembroFamilia("Lyana Stark", rickard, lyarra);
    const catelyn = crearMiembroFamilia("Catelyn Tully");
    const robb = crearMiembroFamilia("Robb Stark", eddard, catelyn);
    const sansa = crearMiembroFamilia("Sansa Stark", eddard, catelyn);
    const arya = crearMiembroFamilia("Arya Stark", eddard, catelyn);

    return { rickard, lyarra, eddard, catelyn, robb, sansa, arya };
})();

function mostrarArbolCompleto() {
    const impresion = document.getElementById('cuelpo');
    
    impresion.innerHTML += obtenerInfo(miembrosStark.eddard);
    impresion.innerHTML += verAncestros(miembrosStark.eddard);
    
    impresion.innerHTML += obtenerInfo(miembrosStark.robb);
    impresion.innerHTML += verAncestros(miembrosStark.robb);
    
    impresion.innerHTML += obtenerInfo(miembrosStark.arya);
    impresion.innerHTML += verAncestros(miembrosStark.arya);
}
document.addEventListener('DOMContentLoaded', mostrarArbolCompleto);
//---------------Problema6----------------------------------------------------


