
// fazendo cada indice * 2 
const numeros = [5,6,7,8,9,32,23,13,12,33,23]
const numerosEmDobro = numeros.map(valor => valor * 2)
console.log(numerosEmDobro)

const pessoas = [
    {name: 'eric', age: 53}, 
    {name: 'maria', age: 28}, 
    {name: 'jose', age: 56}, 
    {name: 'ana', age: 55}, 
    {name: 'clovis', age: 24}, 
]
// retorne uma array com o nome da pessoa
const retornaNome =  pessoas.map(obj => obj.name)
console.log(retornaNome)

// remova apenas a chave nome de cada objeto 
const removeNome = pessoas.map(obj => ({idade: obj.age})) // virou uma expressão com ()
console.log(removeNome)

// adiciona uma chave id para cada obj 
const comIds = pessoas.map(function (obj, indice) {
    obj.id = indice + 1
    // return obj


    // criando um obj diferente do original
    const newObj ={...obj}
    newObj.id = indice 
    return  newObj
})

console.log(comIds)

//notas
// modifica o obj original 
// se n quiser alterar o obj original tem que criar um obj 