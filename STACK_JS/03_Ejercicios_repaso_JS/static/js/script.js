// Ejercicio 1: Calculadora de Envío

//## Enunciado

//Una empresa de despacho cobra el envío dependiendo del peso del paquete.

//Solicitar:

//- Nombre del cliente
//- Peso del paquete (kg)

//Condiciones:

//- Hasta 2 kg
//- Más de 2 kg y hasta 5 kg
//- Más de 5 kg y hasta 10 kg
//- Más de 10 kg

//El programa debe indicar:

//- Nombre del cliente
//- Categoría del envío
//- Valor correspondiente al despacho

function ejercicio1() {
    let nombreCliente = prompt("ingrese su nombre: ");
    let peso = parseInt(prompt("ingrese el peso de su pack: "))
    let mensaje = " ";
    let valorDespacho = 2000

    if (peso > 0 && peso <= 2) {
        mensaje = ` ${nombreCliente} su Paquete pesa ${peso} kg
        \nValor despacho: ${valorDespacho * peso} `;
    }
    else if (peso > 2 && peso <= 5) {
        mensaje = ` ${nombreCliente} su Paquete pesa ${peso} kg
        \nValor despacho: ${valorDespacho * peso} `;
    }
    else if (peso > 5 && peso <= 10) {
        mensaje = ` ${nombreCliente} su Paquete pesa ${peso} kg
        \nValor despacho: ${valorDespacho * peso} `;
    }
    else if (peso > 10 && peso <= 50) {
        mensaje = ` ${nombreCliente} su Paquete pesa ${peso} kg
        \nValor despacho: ${valorDespacho * peso} `;
    }

    else (
        mensaje = "ingrese valores validos"
    )
    alert(mensaje)
}


//# Ejercicio 2: Acceso a Biblioteca

//## Enunciado

//Una biblioteca posee dos tipos de usuarios:

//- Estudiante
//- Profesor

//Solicitar:

//- Tipo de usuario
//- Cantidad de libros solicitados

//Condiciones:

//Cada tipo de usuario posee un límite distinto de préstamos.

//El programa debe indicar:

//- Si el préstamo está permitido.
//- Si supera el límite permitido.
//- Mostrar un mensaje diferente según el tipo de usuario.

//Utilizar operadores lógicos para realizar las validaciones.

//

function ejercicio2() {
    let Usuario = prompt("Ingrese Usuario: Estudiante/Profesor")
    let Libros = parseInt(prompt("Ingrese la cantidad de libros solicitados"))
    let mensaje = ""
    if (Libros < 10 && Usuario === "Estudiante") {
        mensaje = `El Usuario ${`Usuario`} solicita ${Libros} Libros , Su prestamo maximo de 10 Lo permite.`
    } else if (Libros > 10 && Usuario === "Estudiante") {
        mensaje = `El Usuario ${`Usuario`} solicita ${Libros} Libros , Su prestamo maximo de 10 NO lo permite.`
    } else if (Libros < 20 && Usuario === "Profesor") {
        mensaje = `El Usuario ${`Usuario`} solicita ${Libros} Libros , Su prestamo maximo de 20 lo permite.`
    } else if (Libros > 20 && Usuario === "Profesor") {
        mensaje = `El Usuario ${`Usuario`} solicita ${Libros} Libros , Su prestamo maximo de 20 NO lo permite.`
    } else {
        mensaje = `Ingrese un usuario valido`
    }
    alert(mensaje)
}

// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

function ejercicio3() {
    let Participante = prompt("Ingrese el nombre del participante")
    let EdadParticipante = parseInt(prompt("Ingrese la edad del participante"))
    let mensaje = ""
    if (EdadParticipante <= 14 && EdadParticipante > 0) {
        mensaje = `El participante ${Participante} tiene ${EdadParticipante} años y se le asigna la categoria de: Liga de Niño`
    } else if (EdadParticipante >= 14 && EdadParticipante <= 18) {
        mensaje = `El participante ${Participante} tiene ${EdadParticipante} años y se le asigna la categoria de: Liga Adolescente`
    } else if (EdadParticipante >= 18 && EdadParticipante <= 60) {
        mensaje = `El participante ${Participante} tiene ${EdadParticipante} años y se le asigna la categoria de: Liga Adulta`
    } else if (EdadParticipante >= 60 && EdadParticipante <= 120) {
        mensaje = `El participante ${Participante} tiene ${EdadParticipante} años y se le asigna la categoria de: Liga Adulto Mayor`
    } else {
        mensaje = `Ingrese una edad valida`
    }
    alert(mensaje)
}

// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
    let Trabajador = prompt("Ingrese el nombre del trabajador")
    let AñosServicio = parseInt(prompt("Ingrese los años de servicio"))
    let mensaje = ""
    if (AñosServicio < 5 && AñosServicio > 0) {
        mensaje = `El trabajador ${Trabajador} lleva ${AñosServicio} años de servicio
        \nSu nivel de antiguedad es de :1 y se lleva un bono de $50.000`
    } else if (AñosServicio > 5 && AñosServicio < 10) {
        mensaje = `El trabajador ${Trabajador} lleva ${AñosServicio} años de servicio
        \nSu nivel de antiguedad es de :2 y se lleva un bono de $100.000`
    } else if (AñosServicio > 10 && AñosServicio < 20) {
        mensaje = `El trabajador ${Trabajador} lleva ${AñosServicio} años de servicio
        \nSu nivel de antiguedad es de :3 y se lleva un bono de $200.000`
    } else if (AñosServicio > 20 && AñosServicio < 80) {
        mensaje = `El trabajador ${Trabajador} lleva ${AñosServicio} años de servicio
        \nSu nivel de antiguedad es de :4 y se lleva un bono de $500.000`
    } else {
        mensaje = `Ingrese un numero valido`
    }
    alert(mensaje)
}

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida

function ejercicio5() {
    let Conductor = prompt("Ingrese el nombre del conductor")
    let Velocidad = parseInt(prompt("ingrese la velocidad registrada (KM/h)"))
    let mensaje = ""
    if (Velocidad <= 100 && Velocidad >= 70) {
        mensaje = `El conductor ${Conductor} tiene una velocidad registrada de ${Velocidad}km/h. va manejando rapido`
    } else if (Velocidad <= 70 && Velocidad >= 50) {
        mensaje = `El conductor ${Conductor} tiene una velocidad registrada de ${Velocidad}km/h. maneja a velocidad media`
    } else if (Velocidad <= 49 && Velocidad >= 0) {
        mensaje = `El conductor ${Conductor} tiene una velocidad registrada de ${Velocidad}km/h. maneja lento`
    } else if ( Velocidad >= 101) {
        mensaje = `El conductor ${Conductor} tiene una velocidad registrada de ${Velocidad}km/h. excedio el limite de velocidad`
    } else{
        mensaje = `Introduzca valores validos`
    }
    alert(mensaje)
}