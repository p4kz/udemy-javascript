// let a = 'A'; //b
// let b = 'B'; //c
// let c = 'C'; //a

// const letras = [ b , c, a];     // <-
// [a, b, c] = letras;            // <- é uma atribuição via desestruturação - reatribuindo o valor delas

// console.log(a, b, c);


// const numeros = [1, 2 ,3 ,4 ,5, 6, 7, 8, 9,];
// const primeiroNumero = numeros[0];              // <- metodo normal
// console.log(numeros[0]);


// ... rest, ...spread

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,];
// const [um, dois, tres, ...rest] = numeros;                                      // <- rest exemplo - mostra no console o valor ( um dois tres) e o reto dos numeros 
// console.log(um, dois, tres);
// console.log(rest);

//valores em brancos

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,];
// const [um, , tres, , cinco, , sete] = numeros; //<- pulando valores baseados no array 
// console.log (um, tres, cinco);


/* indice dentro do indice bugando mente */

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9],];
//console.log(numeros[1][2])     //<- acessando o indece 1 e o valor 2 que no caso é o numero 6 // dito no console

//const [, [,,seis]] = numeros; //<- tambem acessou o seis usando a separação com virgulas seila (NÃO SAQUEI VER DEPOIS) 
//console.log(seis);

const [Lista1, lista2, lista3] = numeros;
console.log(lista3[2]);