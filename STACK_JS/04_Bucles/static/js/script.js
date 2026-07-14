console.log(`Conexion exitosa`)

// Ejemplo bucle for
function contarHasta5() {
    for (let i = 1; i <= 100;) {
        alert(i);
        if (i >= 20) {
            i += 2;
            if (i >= 50) {
                i += 3
            }
        } else {
            i++;
        }
    }
}

function cuentaRegresiva() {

}


function recorrerLista() {
    // Lista es un tipo de dato (array/lista/arreglos)
    // [] = ["nombre" , 4, True ,[2,4]]
    /*
    let nombre = "Carlos";
    alert(nombre);
    let nombres = ["Carlos", "Maria"]
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres=[1]) --> Imprime Maria
    alert(nombres.length); --> 2
    alert(nombres[0].length); --> 6
    */
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

// Ejemplo bucle while
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}

function cargarDatos() {
    let datosPendientes = 50;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 50`);
        datosPendientes -= (Math.round(Math.random()));
    }
}
function validarContrasena() {
    let contrasenaCorrecta = false;
    let NumeroIntentos = 3
    debugger;
    
    while (!contrasenaCorrecta) {

        let intento = prompt(`Ingresa tu contraseña:
            \n Numero de intentos ${NumeroIntentos}`);
        if (NumeroIntentos <= 0) {
            if (intento === "1234") {
                contrasenaCorrecta = true;
                alert("Acceso concedido.");
                NumeroIntentos = 3
            } else {
                NumeroIntentos-= 1
                alert("Contraseña incorrecta, intenta de nuevo.");
                
            }
        }
    }
}
