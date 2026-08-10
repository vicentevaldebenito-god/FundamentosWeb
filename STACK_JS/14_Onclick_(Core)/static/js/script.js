let boton = document.getElementById("Cerrar_Iniciar");

boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if (textoBoton === "Cerrar Sesión") {
        this.innerText = "Iniciar Sesión";
    }else{
        this.innerText = "Cerrar Sesión";
    }
});

let boton_likes1 = document.getElementById("Likes1");
let contador_likes1= 12;

boton_likes1.addEventListener("click" , function(){
        contador_likes1++
        this.innerText = `${contador_likes1} Me gusta`
    
})

let boton_likes2 = document.getElementById("Likes2");
let contador_likes2= 30;

boton_likes2.addEventListener("click" , function(){
        contador_likes2++
        this.innerText = `${contador_likes2} Me gusta`
    
})

let perfil = document.getElementById("Perfil");

perfil.addEventListener("click", function(){
    alert(`Su perfil ha recibido 3 me gustas hoy`)
})