
// Seleccion con queryselector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del titulo es ${title.textContent}`)


//Seleccionar un parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo)

//Seleccionar dentro de nav 

let parrafito = document.querySelector(".texto");
console.log(parrafito.textContent); // "Este es el primer párrafo."

let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

//Tarea:
/* Crear un boton y aplicar condicion al igual que el ejempo
- Debe cambiar su texto al momento de hacerle click}
- Debe activarse un hover js cambiando el color del fondo*/

const buton = document.querySelector("button");

buton.addEventListener("mouseover", function(){
buton.style.backgroundColor = "red"
})

buton.addEventListener("mouseout", function(){
buton.style.backgroundColor = "white"
})

buton.addEventListener("click", function(){
    
    let textoButon = buton.textContent;
    if (textoButon === "Dame click") {
        this.innerText = "¡Texto cambiado!";
    } else {
        this.innerText = "Dame click";
    }
}
)
