// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.

function pizzaOven(corteza, salsa, quesos, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

let estiloChicago = pizzaOven(
    "corteza tradicional",
    "salsa tradicional",
    "mozzarella",
    ["pepperoni", "salchicha"]
);
let lanzadaaMano = pizzaOven(
    "corteza tradicional",
    "salsa marinara",
    ["mozzarella", "feta"],
    ["champiñones", "aceitunas", "cebollas"]
);
let pizza3 = pizzaOven(
    "corteza gruesa",
    "salsa tradicional",
    "mozzarella",
    ["pepperoni", "salchicha italiana"]
);
let pizza4 = pizzaOven(
    "corteza delgada",
    "salsa suave",
    "gauda",
    ["jamon", "piña"]
);


function LasPizzas() {
    alert(`Ingredientes pizza estilo chicago
    Corteza: ${estiloChicago.corteza}
    Salsa: ${estiloChicago.salsa}
    Quesos: ${estiloChicago.quesos}
    Ingredientes: ${estiloChicago.ingredientes}`)

    alert(`Ingredientes pizza lanzada a mano
    Corteza: ${lanzadaaMano.corteza}
    Salsa: ${lanzadaaMano.salsa}
    Quesos: ${lanzadaaMano.quesos}
    Ingredientes: ${lanzadaaMano.ingredientes}`)

    alert(`Ingredientes pizza custom 1
    Corteza: ${pizza3.corteza}
    Salsa: ${pizza3.salsa}
    Quesos: ${pizza3.quesos}
    Ingredientes: ${pizza3.ingredientes}`)

    alert(`Ingredientes pizza custom 2
    Corteza: ${pizza4.corteza}
    Salsa: ${pizza4.salsa}
    Quesos: ${pizza4.quesos}
    Ingredientes: ${pizza4.ingredientes}`)
}
