const numeros = [1,35,45,23,12,4]

const mayoresA10 = numeros.filter((e)=> e >10) //notacion lambda
console.log("los numeros: " + numeros)
console.log("mayores a 10: "+ mayoresA10)

const numerosX10 = numeros.map((e)=> e *10)
console.log("los numeros: " + numeros)
console.log("multiplicados: " + numerosX10)