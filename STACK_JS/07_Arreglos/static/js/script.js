// # 💻 Ejercicios

// ## Ejercicio 1

// Crear el siguiente arreglo.

// ```javascript
// let edades = [15,18,20,14,25];
// ```

// Mostrar:

// - Primera edad.
// - Última edad.
// - Cantidad de elementos.

// ---

function ejercicio1() {
    let edades = [15, 18, 20, 14, 25]
    alert(`La primera edad es ${edades[0]} , la ultima es ${edades[4]} y tiene ${edades.length} elementos`)
}

// ## Ejercicio 2

// Crear un arreglo con cinco nombres.

// Mostrar todos utilizando un ciclo `for`.

// ---

function ejercicio2() {
    let nombres = ["Ana", "Carlos", "Luis", "María", "Ariel"]
    for (let lista = 0; lista < nombres.length; lista++) {
        alert("La lista va: " + nombres[lista]);
    }
}

// ## Ejercicio 3

// Crear un arreglo con cinco notas.

// Calcular el promedio.

// Mostrar:

// ```text
// Promedio: X
// ```

// ---

function ejercicio3() {
    let notas = [4.5, 7.0, 6.7, 2.7, 4.1]
    let suma = 0
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i]
    }
    let promedio = suma / notas.length;
    alert(`el promedio es: ${promedio}`)

}

// ## Ejercicio 4

// Crear el arreglo.

// ```javascript
// [18,20,15,22,19,25,17]
// ```

// Mostrar solamente las temperaturas mayores a 20.

// ---

function ejercicio4() {
    let temperaturas = [18, 20, 15, 22, 19, 25, 17]
    for (let contador = 0; contador < temperaturas.length; contador++) {
        if (temperaturas[contador] > 20) {
            alert(`las temperaturas mayor de 20: ${temperaturas[contador]}`)
        }
    }
}

// ## Ejercicio 5

// Crear un arreglo con diez números.

// Contar:

// - Cuántos son pares.
// - Cuántos son impares.

// ---

function ejercicio5(){
    let numerales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let contador2 = 0; contador2 < numerales.length; contador2++) {
        if (numerales[contador2] % 2 == 0) {
            alert(`el numero ${numerales[contador2]} es par`)
        }else if(numerales[contador2] % 2 != 0){
            alert(`el numero ${numerales[contador2]} es impar`)
        }
    }
}


// ## Ejercicio 6

// Crear el siguiente arreglo.

// ```javascript
// [5000,12000,3000,4500,7000]
// ```

// Mostrar:

// - Venta mayor.
// - Venta menor.
// - Total vendido.

// ---

function ejercicio6(){
    let numerillos = [5000,12000,3000,4500,7000];
let ventaMenor = numerillos[0]
let ventaMayor = numerillos[0]
let ventasTotales = 0
for(let i=0; i < numerillos.length ; i++){
ventasTotales += numerillos[i]
    if(numerillos[i] > ventaMayor){
        ventaMayor = numerillos[i]
    }else if(numerillos[i] < ventaMenor){
        ventaMenor= numerillos[i]
    }
}
alert(`La venta mayor es: ${ventaMayor}
    \nLa venta menor es: ${ventaMenor}
    \nel total de todas las ventas es: ${ventasTotales} `);
}

// ## Ejercicio 7

// Crear el siguiente arreglo.

// ```javascript
// ["Ana","Pedro","María","Juan","Camila","Tomás"]
// ```

// Mostrar únicamente los nombres con más de cuatro letras.

// ---

function ejercicio7(){
    let nombrillos = ["Ana","Pedro","María","Juan","Camila","Tomás"]
    for(let contadorillo= 0; contadorillo < nombrillos.length; contadorillo++){
    if(nombrillos[contadorillo].length > 4){
        alert(`Los nombres con mas de 4 letras en la lista son:
            \n ${nombrillos[contadorillo]}`)
    }
}
}

// ## Ejercicio 8

// Crear un arreglo con ocho números.

// Mostrar únicamente los múltiplos de 3.

// ---

function ejercicio8(){
    let numerochos = [1,3,6,8,12,15,21,22]
    for(let contarocho = 0; contarocho < numerochos.length; contarocho++){
        if(numerochos[contarocho] % 3 == 0){
            alert(`El numero ${numerochos[contarocho]} es multiplo de 3`)
        }
    }
}

// ## Ejercicio 9

// Crear el siguiente arreglo.

// ```javascript
// [15,16,17,18,17,16,19,20]
// ```

// Calcular:

// - Cantidad de mayores de edad.
// - Cantidad de menores de edad.

// ---

function ejercicio9(){
    let = edadillas = [15,16,17,18,17,16,19,20]
    for(let contarillo = 0; contarillo < edadillas.length; contarillo++){
        if(edadillas[contarillo] < 18){
            alert(``)
        }
    }
}

// ## Ejercicio 10 (Desafío)

// ```javascript
// let ventas = [12000,18000,5000,21000,9000,15000,8000];
// ```

// Mostrar:

// - Total de ventas.
// - Promedio.
// - Venta mayor.
// - Venta menor.
// - Cantidad de ventas mayores a $10.000.
// - Cantidad de ventas menores o iguales a $10.000.
// - Índice donde ocurrió la venta mayor.
// - Índice donde ocurrió la venta menor.

// ---
