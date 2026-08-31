const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "red";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "pink";
});

const boton2 = document.getElementById("miBoton2");

boton2.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton2.style.backgroundColor = "red";
    let boton2text = boton2.textContent
    this.innerText = "Trollque Colque"
});

boton2.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton2.style.backgroundColor = "pink";
    let boton2text = boton2.textContent
    this.innerText = "Pasa el cursos sobre mí"
});

const boton3 = document.getElementById("miBoton3");

boton3.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton3.style.backgroundColor = "red";
        boton3.style.color = "blue";
});

boton3.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton3.style.backgroundColor = "pink";
    boton3.style.color = "white";
});




/*
Tarea

Crear dos botones con evento onmouseover y onmouseout 

-cambiar el texto de un boton
-cambiar el color de fondo y color de texto del segundo boton
*/