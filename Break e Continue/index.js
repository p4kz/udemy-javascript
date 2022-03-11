
// continue - pula pra proxima interação e continua rodando o codigo
// break - para o codigo assim que encontra a condição 

const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros){

    if(numero=== 2 ){        // <- se eu não quiser que o 2 apareça por exemplo
        console.log('Pulei o numero 2')
        continue;         
    }

    console.log(numero);

    if (numero === 7 ){      // <- sai do laço assim que eoncotra o numero 7
        console.log('saindo do laço'); 
        break;           
    } 
}