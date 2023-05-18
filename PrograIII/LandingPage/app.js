function validarSuscripcion(){
    const nombre = document.getElementById("name")
    const email = document.getElementById("email")

    if(nombre.value === ""){
        alert("Ingrese un nombre para suscribirse")
        return false;
    }
    if(email.value === ""){
        alert("Ingrese un email para suscribirse")
        return false;
    }
    
    return true;
}

function suscribirse(){
    if(validarSuscripcion()){
        alert("Se ha suscripto correctamente")
        nombre.value = '';
        email.value = '';
    }
    else{
        alert("Error al suscribirse, complete campos.")
    }
    
}


var form = document.getElementById("form1");
form.addEventListener('sumbit', function(evt){
    evt.preventDefault();

    const txtNombre = document.getElementById("nomContacto")
    const txtEmail = document.getElementById("emailContacto")
    const txtMensaje = document.getElementById("textoContacto")

    if(txtNombre.value === "" || txtEmail.value === "" || txtMensaje.value === ""){
        alert("Todos los campos deben tener contenido")
    }
    else{
        alert("Mensaje enviado con exito")
        document.getElementById("form1").sumbit();
    }

    
})

function enviarMensaje(){
    const txtNombre = document.getElementById("nomContacto")
    const txtEmail = document.getElementById("emailContacto")
    const txtMensaje = document.getElementById("textoContacto")

    if(txtNombre.value === ""){
        alert("Ingrese un nombre para enviar el mensaje")
        return false;
    }
    if(txtEmail.value === ""){
        alert("Ingrese un email para enviar el mensaje")
        return false;
    }
    if(txtMensaje.value === "" || txtMensaje.value.lenght < 50){
        alert("El mensaje debe tener al menos 50 letras")
        return false;
    }
    return true;
}

function enviarMensaje(){
    if(enviarMensaje()){
        alert("Mensaje enviado correctamente")
    }
    else{
        alert("Error al enviar el mensaje.")
    }
    
}
