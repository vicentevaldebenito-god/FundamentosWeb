document.getElementById("colorBoton").addEventListener("click", function () {
    cambiarBotones();
});
document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColor();
});
document.getElementById("colorLetra").addEventListener("click", function () {
    cambiarLetras();
});
// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

function cambiarBotones() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.querySelectorAll("button").forEach(b => b.style.backgroundColor = colorAleatorio);
}

function cambiarLetras() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.color = colorAleatorio;
}