

const numeros = [5,6,7,8,9,32,23,13,12,33,23]


// Some todos os numeros (reduce)
const total = numeros.reduce(function(acumador, valor, indice, array){
    acumador += valor 
    return acumador
}, 0)
console.log(total)


//Retorne um array com os pares (Filter)
const pares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 == 0)  acumulador.push(valor)
    return acumulador;
},[])
console.log(pares)

// retorne um array com o dobro dos valores
const x2 = numeros.reduce(function(acumulador, valor){    
    acumulador.push(valor * 2 )
    return acumulador
},[])
console.log(x2)

//_________________________________________________________________________

const pessoas = [
    {name: 'eric', age: 53}, 
    {name: 'maria', age: 28}, 
    {name: 'jose', age: 56}, 
    {name: 'ana', age: 55}, 
    {name: 'clovis', age: 24}, 
]


// retorne a pessoa mais velha
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.age > valor.age)
    return acumulador
    return valor
}, 0)

console.log(maisVelha)