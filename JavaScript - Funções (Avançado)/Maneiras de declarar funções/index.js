
//declaração de função ( function hoisting)

falaOi()

function falaOi(){
    console.log('oie')
}

//funçoes são objetos d eprimeira classe

//function expression

const souUmDado = function() {  // <- uma constante recebe uma função, como dado 
    console.log('sou um dado ')
}

souUmDado()

function executaFuncao(funcao) {
    console.log('executei abaixo')
    funcao();
}

executaFuncao(souUmDado)


// arrow function

 const funcaoArrow = () => {
    console.log('sou uma arrow function')
 };

 funcaoArrow()

 // dentro de um objeto

 const obj = {
     falar: function () {
         console.log('estou lendo...')
     }
 }

 obj.falar()