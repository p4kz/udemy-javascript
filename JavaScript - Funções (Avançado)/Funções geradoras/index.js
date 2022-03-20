//funçoes geradoras tem um recurso expecial que da um pause o codigo - avaliação preguiçosa


//a primeira vez que chamo vem o 1 valor depois o 2 e o 3 // maneiro
function* geradora1 () {
    // codigo
    
    yield 'valor 1'
    // codigo
    
    yield 'valor 2'
    // codigo
    
    yield 'valor 3'



}


const g1 = geradora1()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)

console.log(g1.next()) // retorna done true pq acabou o valores 

