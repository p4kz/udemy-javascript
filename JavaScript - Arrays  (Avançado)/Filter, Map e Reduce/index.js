
// filtrar pares
// dobrar valores
// reduzir e somar tudo
const numeros = [5,6,7,8,9,32,23,13,12,33,23]

const pares = numeros
.filter(valor => valor % 2 == 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor)

console.log(pares)

