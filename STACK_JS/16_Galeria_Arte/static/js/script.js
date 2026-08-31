
const imagen = document.getElementById("Imagen")
const imagenNueva = "static/image/Noche.jfif";
const imagenOg = "static/image/Campo.webp"

const desc = document.getElementById("Desc")
imagen.addEventListener("mouseover", function () {
this.src = imagenNueva;
desc.textContent = "La noche estrellada, Vincent Van Gogh (1889)"
});

imagen.addEventListener("mouseout", function () {
this.src = imagenOg;
desc.textContent = "Campo de trigo con cipreses, Vincent Van Gogh (1889)"
});