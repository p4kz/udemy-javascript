const nomes = ['edu', 'maria', 'eric', 'p4k', 'jorge']

//nomes.splice(indice, delete, el1 , el2, el3)

const removidos = nomes.splice(0, 1) // (-1, 1) <- simulando o .pop // (0, 1) simulando o .shift
const add = nomes.splice(3, 0 , 'lara', 'clovis') // a partir do indice 3 add pessoas '' // dá pra usar pra remover e adcionar no meio do array 

console.log(nomes, removidos)
console.log(add)
 