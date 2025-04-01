let log = console.log
log("");
function loggeado() {
    const usuario = document.querySelector('input[name="user"]').value;
    const contrasena = document.querySelector('input[name="contrasena"]').value;
    
    const contenedor = document.querySelector(".conteiner");
    
    const mensaje = document.createElement("p");
    mensaje.style.color = "#ff00e1";
    mensaje.style.marginTop = "20px";
    mensaje.style.textShadow = "0 0 10px #b700ff";
    
    if (usuari === "totorro" && contrasena === "123") {
        mensaje.textContent = "TOTORRO!!!!";
    } else {
        mensaje.textContent = "U're not Totorro :(";
    }
    contenedor.appendChild(mensaje);
}

function acercaDe(){
    document.body.style.backgroundImage= `url('herramientas/TotorroRustic.jpg')`
    document.body.style.backgroundSize= "cover;"
    document.body.style.backgroundPosition = "center";
}
