
/*

Object.values <- retorna valor 
Object.entries <- retorna chave valor em array 
Object.assign ( des , any ) <- copia um objeto 
Object.getOwnPropertyDescriptor (o, 'prop') <- saber as propriedades do objeto
...(spread) <- espalha os valores do objeto

Object.keys ( retrorna as chaves )
Object.freeze ( congela o objeto )
Object.defineProperties ( define varias propriedades )
Object.defineProperty ( define uma propriedade )

*/


const produto = {nome: 'caneca', preco: 1.8}
const caneca = Object.assign({}, produto,{ material: 'porcelana'})


const outraCoisa = { // spread
    ...produto,
    material: 'porcelana'
}


outraCoisa.nome = 'outro nome'
outraCoisa.preco = 11

console.log(outraCoisa)
console.log(produto)
console.log(caneca)
