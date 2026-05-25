// ✅ Ejercicio 1: Sistema de descuento
// 📝 Enunciado
// Una tienda realiza descuentos según el monto de compra:
// Si la compra es mayor o igual a $50.000 → 20% descuento
// Si la compra es mayor o igual a $30.000 → 10% descuento
// Si la compra es menor a $30.000 → sin descuento
// El programa debe solicitar:
// Nombre del cliente
// Monto de compra
// Luego mostrar:
// Descuento aplicado
// Total a pagar
function ejercicio1(){
    let compra = parseInt(prompt("Ingrese el monto de la compra"))
    let cliente = prompt("Ingrese su nombre:")
    if(compra >= 50000){
        alert(`El cliente ${cliente} esta comprando un objeto con valor de ${compra}
            \nPor ser una compra mayor a 50000 , se le da un descuento del 20%.
            \nSu precio total seria: ${compra - (compra * 0.20)}`)
    }else if(compra >= 30000){
        alert(`El cliente ${cliente} esta comprando un objeto con valor de ${compra}
            \nPor ser una compra mayor a 30000 , se le da un descuento del 10%.
            \nSu precio total seria: ${compra - (compra * 0.10)}`)
    }else if(compra <=30000 && compra > 0){
        alert(`El cliente ${cliente} esta comprando un objeto con valor de ${compra}
            \nPor ser una compra menor a 30000.
            \nSu precio total seria: ${compra}`)
    }else{
        alert(`Ingrese valores válidos`)
    }
}


// ✅ Ejercicio 2: Acceso a evento
// 📝 Enunciado
// Una persona puede ingresar a un evento si:
// Tiene 18 años o más
// O viene acompañada por un adulto
// Solicitar:
// Edad
// Si viene acompañado (si o no)
// Mostrar:
// “Acceso permitido”
// o “Acceso denegado”

function ejercicio2(){
    let edad = parseInt(prompt("Ingrese su edad:"))
    let acompañado = prompt("Viene acompañado? si/no")
    if(edad <= 17 && acompañado === "no"){
        alert(`Acceso denegado`)
    }else if(edad <= 17 && acompañado === "si"){
        alert(`Acceso permitido`)
    }else if(edad >=18){
        alert(`Acceso permitido`)
    }else if(edad < 0 && acompañado !== "si" && acompañado !== "no"){
        alert(`Ingrese una edad valida`)
    }
}

// ✅ Ejercicio 3: Clasificación de temperatura
// 📝 Enunciado
// Solicitar una temperatura y clasificar:
// Menor a 10 → “Hace frío”
// Entre 10 y 24 → “Temperatura agradable”
// 25 o más → “Hace calor”
// Además:
// Si la temperatura supera los 35 grados, mostrar una alerta adicional:
//  “Temperatura extrema”.

// ✅ Ejercicio 4: Verificación de administrador
// 📝 Enunciado
// Solicitar:
// Nombre de usuario
// Contraseña
// Condiciones:
// Usuario correcto: admin
// Contraseña correcta: 12345
// Casos:
// Si ambos son correctos → “Bienvenido administrador”
// Si usuario es correcto pero contraseña incorrecta → “Contraseña incorrecta”
// Si usuario no existe → “Usuario no encontrado”

// ✅ Ejercicio 5: Sistema de aprobación
// 📝 Enunciado
// Solicitar:
// Nombre del estudiante
// Nota 1
// Nota 2
// Nota 3
// Calcular promedio.
// Condiciones:
// Promedio 6.0 o superior → “Aprobado con excelencia”
// Promedio entre 4.0 y 5.9 → “Aprobado”
// Menor a 4.0 → “Reprobado”
// Además:
// Si alguna nota es menor a 2.0 mostrar:
//  “Debe asistir a reforzamiento”.
