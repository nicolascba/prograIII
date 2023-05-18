function validarCampos(){
    const txtNombre = document.getElementById("name")
    const txtEmail = document.getElementById("email")
    const txtMensaje = document.getElementById("message")

    if(txtNombre.value === ""){
        alert("Ingrese un nombre para suscribirse")
        return false;
    }
    if(txtEmail.value == ""){
        alert("Ingrese un email para suscribirse")
        return false;
    }
    if(txtMensaje.value ==""){
        alert("Ingrese un mensaje")
        return false;
    }
    
    return true;
}

function enviarMensaje(){
    if(validarCampos() == true){
        alert("Mensaje enviado correctamente")
    }
    else{
        alert("Campos incompletos")
    }
    
}


document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();
  });