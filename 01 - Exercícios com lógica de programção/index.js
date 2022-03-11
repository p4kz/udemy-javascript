
// Escreva um numero que recebe 2 numeros e retorne o maior deles

//__________________________________________________________

// const maior = max(11,22)

// function max(x, y) {       //<- if else comum
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }

// console.log(maior);

//__________________________________________________________

// const maior = max(11,22)     // <- if else refatorado

// function max(x, y) {
//     if (x > y) return x;
//     return y;
// }

// console.log(maior);

//__________________________________________________________

// const maior = max(11,22)

// function max(x, y) {
//     return x > y ? x : y;    // <- Ternario
// }

// console.log(maior);

//__________________________________________________________

const max2 = (x, y) => x > y ? x : y; // <- Arrow function mais ternario
console.log(max2(111,222));