function cambiarTexto() {
    let titulo = "Hola, bienvenido"
    if (document.getElementById("titulo").innerText == titulo) {
        document.getElementById("titulo").innerText = "Has cambiado el texto con JS";
        document.getElementById("titulo").style.color="red";
        document.getElementById("titulo").style.fontFamily="arial"
    } else{
        document.getElementById("titulo").innerText = titulo;
        document.getElementById("titulo").style.color="black";
        document.getElementById("titulo").style.fontFamily=""
    }
}