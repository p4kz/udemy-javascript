const numeros = [5,6,7,8,9,32,23,13,12,33,23]

// for (let valor of numeros) {
//     console.log(valor)
// }

let total = 0
numeros.forEach(valor => {
    total += valor
})

console.log(total)