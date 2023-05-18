function validarFormulario(){
    const txtNombre = document.getElementById('txtNombre')
    const txtApellido = document.getElementById('txtApellido')
    const rbtSexo = document.getElementsByName('sexo')
    const txtDescripcion = document.getElementById('txtDescripcion')
    const selectDeportes = document.getElementById('deporte')

    if(txtNombre.value === ''){
        alert('Ingrese un nombre')
        return false;
    }
    if(txtApellido.value === ''){
        alert('Ingrese un apellido')
        return false;
    }
    if(txtDescripcion.value === ''){
        alert('Ingrese una descripción')
        return false;
    }

    let algunoCheckeado=false;
    for(let i=0; i<rbtSexo.length;i++){
        if (rbtSexo[i].checked){
            algunoCheckeado = true;
            break;
        }
    }
    if(algunoCheckeado == false){
        alert('Debe seleccionar un sexo')
        return false; 
    }
    return true;

}

function guardar(){
    if(validarFormulario()){
        Swal.fire({
            title: 'Genial',
            text: 'Persona registrada correctamente',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    else {
        Swal.fire({
            title: 'Error!',
            text: 'Faltan completar campos',
            icon: 'error',
            confirmButtonText: 'Okey'
          })
    }
        
}