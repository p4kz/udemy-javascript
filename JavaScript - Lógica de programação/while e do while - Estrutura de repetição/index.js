
// const nome = 'eric';
// let controle = 0;

// while (controle <= nome.length) {
//     console.log(nome[controle]);
//     controle++;
// }

const min = 1
const max = 50

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(min, max);
console.log(rand);

while (rand !== 10){
    rand = random(min, max)
    console.log(rand);
}

//while checa a condição e fecha o laço 

// do while vai executar o codigo depois vai checar a condição 

console.log('#########')

do {
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10)


//Math.random <- gera um numero aleatorio 
