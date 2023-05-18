const Juan = { //un objeto
    nombre: "Juan",
    apellido: "Perez",
    fechaNacimiento: new Date(1998,4,27),

    saludar: function(){
        console.log("hola soy Juan")
    }
}
const Persona2 = new Object()
Persona2.nombre = "Nico"
Persona2.apellido = "Senestrari"
Persona2.fechaNacimiento = new Date(1999,9,17)
Persona2.saludar = function(){
    console.log("Hola me llamo Nico")
}

console.log(Juan)
console.log(Persona2)
