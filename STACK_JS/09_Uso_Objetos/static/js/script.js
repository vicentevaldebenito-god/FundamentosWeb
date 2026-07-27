

//Acceder al pan


//Variable con metodo automovil
let auto = {
    marca:"Toyota",
    modelo:"Corolla",
    año:2023,
    encender:function(){
        alert(
`Encendiendo...
\n${this.marca}
\n${this.modelo}
\naño: ${this.año}`
        );
    }
};




//Objetivo con metodo CASA

let casa = {
    direccion:"Av. Siempre Viva 742",
    habitaciones:4,
    baños:2,
    mostrarInformacion:function(){
        alert(`direccion:"${this.direccion}`);
        alert(`habitaciones:"${this.habitaciones}`);
        alert(`baños:${this.baños}`);
    }
};