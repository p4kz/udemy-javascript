const nomes = ['edu', 'maria', 'eric']
const novo = [...nomes]
nomes[2] = 'jão'
//delete nomes[2]

console.log(nomes.length, novo)

const nome2 = ['edu', 'maria', 'eric']
nomes.push('joão') // add itens no array

const novo2 = nomes.slice('0, 1') // dá pra dividir o array SLICE
console.log(nomes, novo)


const nome = 'eric machado mendonça'
const nome1 = nome.split(' ') // cria um array apartir de uma string
console.log(nome1)