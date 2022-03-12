

// const nome = ['eric', 'otavio', 'maria', 'pak'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

// for (let valor of nome) {  // for of não funciona em objeto 
//  console.log(valor);
// }

// nome.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array)
// });


// for classico geralmente com interáveis (array ou strings)
// for in retorna o indice ou chave (string, array ou objetos)
// for of  retorna em si (iteráveis, arrays ou strings )

const pessoa = {
    nome: 'luiz',
    sobrenome: 'otavio',
}

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}

//=====================