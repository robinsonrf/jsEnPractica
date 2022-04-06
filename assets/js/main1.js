function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    document.querySelector(".resultado").innerHTML = "";

    //Correccion Expresion Regular
    const patron = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    const patron1 = /[a-zA-ZÀ-ÿ0-9\s]{1,100}$/;
    const patron2 = /[a-zA-ZÀ-ÿ0-9\s]{1,1000}$/;

    if (patron.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
        
        pasamosLaValidacion = false;
    } else {
        document.querySelector(".errorNombre").innerHTML = "";
        pasamosLaValidacion = true;
    }

    if (patron1.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido.";
        pasamosLaValidacion = false;
    } else {
        document.querySelector(".errorAsunto").innerHTML = "";
        pasamosLaValidacion = true;
    }

    if (patron2.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
        pasamosLaValidacion = false;
    } else {
        document.querySelector(".errorMensaje").innerHTML = "";
        pasamosLaValidacion = true;
    }
    return pasamosLaValidacion;
};


 let form = document.getElementById("formulario");

 form.addEventListener("submit", function (e) {
     e.preventDefault();

     
     
     let nombre = document.querySelector("#nombre").value;
     let asunto = document.querySelector("#asunto").value;
     let mensaje = document.querySelector("#mensaje").value;
     let resultado = validar(nombre, asunto, mensaje);


     if (resultado == true) {
         document.querySelector(".resultado").innerHTML = "Mensaje Enviado con exito!!!";
         document.querySelector("#nombre").value="";
         document.querySelector("#asunto").value="";
         document.querySelector("#mensaje").value="";

     };
 });