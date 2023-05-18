const array = ["hola", 3.14, true]
console.log("el arrat es " + array)

const array2 = new Array(3);
console.log(array2)

const numeros = [1,35,45,23,12,4]
console.log("array de numeros: " + numeros);
console.log("primer elemento: " + numeros[0]);
console.log("indice de error: " + numeros[123]);

numeros.push(65)
console.log("array actualizado: " + numeros);
numeros.unshift(33) //agrega al principio del array
console.log("array actualizado: " + numeros);

console.log("la cantidad de elementos es: " + numeros.length)