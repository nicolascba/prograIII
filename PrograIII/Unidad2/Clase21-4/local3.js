const obtenerPersonaMasGrande = function(p1,p2,p3){
    let mayor = p1

    if(p2.edad > p1.edad){
        mayor = p2
    }
    else{
        if(p3.edad>p2.edad){
            mayor = p3
        }
    }

    console.log("Soy una funcion")
    return mayor
}

const obtenerPersonaMasGrande2 = (p1,p2,p3) => {
    let mayor = p1

    if(p2.edad > p1.edad){
        mayor = p2
    }
    else{
        if(p3.edad>p2.edad){
            mayor = p3
        }
    }
    
    console.log("Soy una funcion")
    return mayor
}

const p1 = {
    nombre: "nico",
    edad:90
}
const p2 = {
    nombre: "Imanol",
    edad:50
}
const p3 = {
    nombre: "Cami",
    edad:30
}
    

