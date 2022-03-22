// filter , map , reduce

// retorne os numeros maior que 10 
const numeros = [5,6,7,8,9,32,23,13,12,33,23]

//_____________________________________________________

// minha solução

function filtrando(value) {
    if(value >= 10 )
    return value
}

let filtro = numeros.filter(filtrando)
console.log(filtro)

//_____________________________________________________

//                  professor solução

// function callbackFilter(valor) {
//     return valor > 10
// }

// const numerosFiltrados = numeros.filter(callbackFilter)
// console.log(numerosFiltrados)

//______________________________________________________

//                   function anonima
//                    arrow function

const numeros2 = [5,6,7,8,9,23,43,33,12,3,2]
const filtrados = numeros2.filter(valor => valor > 10)
console.log(filtrados)

//_________________________________________________________

// retorne as pessoas que tem o nome com 5 letras ou mais 
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a 

const pessoas = [
    {name: 'eric', age: 53}, 
    {name: 'maria', age: 28}, 
    {name: 'jose', age: 56}, 
    {name: 'ana', age: 55}, 
    {name: 'clovis', age: 24}, 
]


// 1

const pessoasComGrande = pessoas.filter(obj => obj.name.length >= 5)
console.log(pessoasComGrande)

// 2

const pessoasAnos = pessoas.filter(valor => valor.age >= 50) 
console.log(pessoasAnos)

// 3

const nomeComA = pessoas.filter(obj => obj.name.toLowerCase().endsWith('a'))
console.log(nomeComA)