// Escreva uma função chamada epaisagem que recebe dois argumentos 
// largura e altura de uma imagem (numeber)
// retorne true se estiver no modo  pasagem 

// toUpperCase <- letra forma

// const largura = 100;
// const altura = 50; 

// const nivel = largura > altura ? true : false;  


// console.log(nivel);

//                           Minha Solução 

// function ePaisagem(altura, largura) {
//     return largura > altura ? true : false;  
// }

// const result = ePaisagem(100, 400)
// console.log(result)

//                         Professor solução

// function ePaisagem(largura, altura){
//     return largura > altura
// }
// console.log(ePaisagem(100,150))


//                       Exemplo 2 arrow-function

const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(100, 50))