/*

Escreva uma função que recebe um numero e retorne o seguinte:

Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número não é divisivel por 3 e 5 retorna o proprio número 
Checar se o numero realmente é um numero = retorna o proprio numero
use a função com números de 0 a 100

*/

function fizzBuzz(numero){
    if (typeof numero !== 'number') return NaN;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; // <- Essa condição checa duas ações então deve estar antes das outras
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    
    return numero;
}

for (let i = 0; i<= 100; i++) {
    console.log(i, fizzBuzz(i))
}