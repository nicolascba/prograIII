//Validacion con Jquery
/*$.validator.setDefaults({
    submitHandler: function(form){
        alert("Paso todo correctamente")
        form.sumbit();
        form.reset();
    }
})

$(function(){
    var $registerForm = $("#formulario");
    $.validator.addMethod("noSpace", function(value, element){
        return value == '' || value.trim().length != 0;
    });
    $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    }, "El nombre debe ser alfanumérico");

    if($("#formulario").length){
        $("#formulario").validate({
            rules:{
                nombre:{
                    required: true,
                    alphanumeric: true,
                    minlength: 8
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8
                },
                confirmarPassword: {
                    required: true,
                    minlength: 8,
                    equalTo: '#Password'
                },
                checkAceptar: {
                    required: true
                }
            },
            messages: {
                nombre: {
                    required: 'Por favor ingrese un nombre',
                    minlength: 'El nombre debe tener 8 caracteres',
                },
                email: {
                    required: "El email es requerido",
                    email: "Debe tener formato de email"
                },
                password: {
                    required: "La contraseña es requerida",
                    minlength: "La contraseña debe tener 8 caracteres"
                },
                confirmarPassword: {
                    required: "Debe confirmar la contraseña",
                    minlength: "Debe tener 8 caracteres",
                    equalTo: 'Debe ser igual a la contraseña'
                },
                checkAceptar: {
                    required: "Debe aceptar los términos"
                }
            },
            errorClass: 'text-danger',
            errorElement : 'label',

        });
    }
});*/
//Validacion con JS
function validarFormulario(){
    const txtNombre = document.getElementById("txtNombre")
    const txtEmail = document.getElementById("email")
    const txtContaseña = document.getElementById("password")
    const txtConfirmar = document.getElementById("confirmarPassword")
    const txtComentario = document.getElementById("comentarios")

    if(txtNombre.value === ""){
        alert("Ingrese un nombre")
        return false;
    }
    if(txtEmail.value === ""){
        alert("Ingrese un email")
        return false;
    }
    if(txtContaseña.value === ""){
        alert("Ingrese una contraseña!")
        return false;
        
    }
    if(txtContaseña.value != txtConfirmar.value){
        alert("Las contraseñas deben coincidir")
        return false;
    }
    if(txtComentario.value === ""){
        alert("Ingrese un comentario!")
        return false;
    }
    return true;
}

function guardar(){
    if(validarFormulario()){
        alert("Formulario enviado correctamente")
    }
    else{
        alert("Error!")
    }
}

function mostrarMensaje(){
    console.log("Haz hecho click!")
}
