

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [
    {id: 3, nome: 'eric'},
    {id: 2, nome: 'pak'},
    {id: 1, nome: 'p4kerson'}
]

// const novasPessoas = {}

// for (const {id, nome } of pessoas) {
//     novasPessoas[id] = {id, nome}
// }

const novasPessoas = new Map()

for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ...pessoa})
}

console.log(novasPessoas)
console.log(novasPessoas.get(2))
