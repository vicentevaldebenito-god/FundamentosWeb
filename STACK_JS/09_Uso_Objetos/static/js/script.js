let hamburguesaEspecial = {
    pan:"Pan brioche",
    carne:"Pollo crujiente",
    queso:"Suizo",
    extras:[
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes:function(){
        console.log("Pan:",this.pan);
        console.log("Carne:",this.carne);
        console.log("Queso:",this.queso);
        console.log(
            "Extras:",
            this.extras.join(", ")
        );
    }
};

//Acceder al pan
console.log(hamburguesaEspecial.pan)
hamburguesaEspecial.mostrarIngredientes();

// # 💻 Ejercicios

// ## Ejercicio 1

// Crea un objeto llamado **libro** con las siguientes propiedades.

// - título
// - autor
// - año
// - editorial
// - páginas

// Luego muestra todas sus propiedades utilizando `console.log()`.

// ---

function ejercicio1(){
    let librillo = []
}

// ## Ejercicio 2

// Crea un objeto llamado **celular**.

// Debe contener:

// - marca
// - modelo
// - almacenamiento
// - color

// Posteriormente:

// - Cambia el color.
// - Agrega una propiedad llamada `precio`.
// - Elimina la propiedad `almacenamiento`.

// Finalmente muestra el objeto completo.

// ---

// ## Ejercicio 3

// Crea un objeto llamado **videojuego**.

// Debe contener:

// - nombre
// - género
// - plataforma

// Agrega un método llamado `mostrarInformacion()` que imprima todas sus propiedades utilizando `this`.

// ---

// # 🚀 Desafío 1 — Sistema de Estudiantes

// Crea un objeto llamado **estudiante** con:

// - nombre
// - edad
// - curso
// - promedio
// - asistencia

// Agrega un método llamado `mostrarResumen()` que muestre un resumen como el siguiente:

// ```text
// Nombre: Pedro

// Curso: 4° Medio

// Promedio: 6.2

// Asistencia: 95%
// ```

// Utiliza `this` para acceder a todas las propiedades.

// ---

// # 🚀 Desafío 2 — Catálogo de Productos

// Crea un objeto llamado **producto**.

// Debe contener:

// - nombre
// - precio
// - stock
// - categoría
// - descuento

// Agrega un método llamado `precioFinal()` que calcule el precio con descuento y muestre:

// ```text
// Producto: Notebook

// Precio original: $650000

// Descuento: 10%

// Precio final: $585000
// ```

// ---

// # 🚀 Desafío 3 — Personaje de Videojuego ⭐

// Diseña un objeto llamado **personaje**.

// Debe contener:

// - nombre
// - vida
// - ataque
// - defensa
// - nivel
// - inventario (arreglo)

// Además debe tener los siguientes métodos:

// - `mostrarEstado()`
// - `subirNivel()`
// - `recibirDaño(cantidad)`
// - `agregarObjeto(objeto)`

// El programa debe permitir realizar acciones como:

// ```javascript
// personaje.mostrarEstado();

// personaje.subirNivel();

// personaje.recibirDaño(25);

// personaje.agregarObjeto("Espada Legendaria");

// personaje.mostrarEstado();
// ```

// ### ⭐ Desafío Extra

// Investiga cómo funcionan los **objetos anidados** (objetos dentro de objetos) y crea un objeto llamado **empresa** con la siguiente estructura:

// - Nombre de la empresa.
// - Dirección.
// - Un objeto llamado `gerente`.
// - Un arreglo llamado `empleados`.
// - Un método llamado `mostrarEmpresa()` que muestre toda la información utilizando `this`.
