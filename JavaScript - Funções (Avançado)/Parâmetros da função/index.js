// function funcao() {
//     console.log(arguments[0])
// }
// funcao('valor',1,1,2,1,2)



// function funcao() {
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento;
//     } 

//     console.log(total)
// }

// funcao(1,1,2,1,2) //<- posso mandar o valor aqui sem mandar parametro para função // estranho  

// function funcao( a, b, c, d, f) { //<- parametros
//     console.log(a, b, c, d, f);    
// }

// funcao(1,2,3);//<- argumentos são os valores que você envia para os parametros

// function funcao( a, b = 2) { //<- pode mandar um valor padrão assim tbm 
//     //b = b || 0 // <- b é b ou 0 - se caso o b não tenha valor 
//     console.log(a + b);    
// }

// funcao(2);

// function funcao({nome, sobrenome , idade}) {  // desestruturando objeto
     
//     console.log(nome, sobrenome, idade);    
// }

// let obj = {nome: 'eric', sobrenome : 'mendonça', idade: 23};

// funcao(obj)




// function funcao([valor1, valor2 , valor3]) {  // desestruturando array
     
//     console.log(valor1, valor2, valor3);    
// }

// funcao(['eric' , 'mendonça', 23])


function conta(operador, acumulador, ...numeros) { // ...rest
    for( let numero of numeros){
        if (operador === '+')acumulador += numero
        if (operador === '-')acumulador += numero
        if (operador === '/')acumulador += numero
        if (operador === '*')acumulador += numero
    }

    console.log(acumulador)
} 

conta('*', 0, 20 ,30 ,40) // primeiro vezes o segundo terceito e quarto...