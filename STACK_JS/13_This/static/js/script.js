// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");


alert(`Dale click w`)
// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if (textoBoton === "si funka we") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "si funka we";
    }
    // Cambia el texto del botón usando `this`
});

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        // Eliminamos la imagen al hacer clic
        this.remove();
    });
});