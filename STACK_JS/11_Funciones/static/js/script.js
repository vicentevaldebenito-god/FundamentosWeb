
// Ejemplo funcion simple (sin parametros)

function saludar(/* parametros */) {
    console.log("¡Hola , bienvenido!");
}

function saludarParam(nombre) {
    alert(`¡Hola ${nombre}`)


    saludarParam("Huesillo")
}


// Funciones con return
function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);


/* Tarea: 
Crear una funcion que reciba 3 parametros , a b y c
debe sumar a + b y el resultado restarlo por c
devolver el valor final y mostrar con un alert
*/

function tarea(a, b, c){
return a + b - c;

let num1 = parseInt(prompt("Ingresa el primer numero"))
let num2 = parseInt(prompt("Ingresa el segundo numero"))
let num3 = parseInt(prompt("Ingresa el tercer numero"))
let resultado = tarea(num1, num2, num3);
alert(`La operacion ${num1} + ${num2} - ${num3} = ${resultado}`)
}



/* Crea una funcion que reciba un parametro y permita a travez de un bucle contrar hasta este

ej: se recibe el numero 5 y muestra 1 - 2 - 3 - 4 - 5
*/

function contar() {

    let numerete = parseInt(prompt("Ingrese el limite del contador"))
    resultado = contadore(numerete)

    alert(resultado.join(" - "))
}
function contadore(a){
    let numerites = []
    for(let i = 1; i <= a; i++){
        numerites.push(i)
    }
    return numerites;
}

