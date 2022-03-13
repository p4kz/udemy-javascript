

// try {
//     console.log(nãoexisto);  // chamadas que podem dar erro
// } catch(error) {
//     console.log('não existo, não existe.') // resposta de quando der erro
// }

function soma(x,y){
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
    ) {              // classes de erros js <- Olhar depois 
        throw/* new Error /* new RefenceError */('x e y precisam ser numeros'); // resposta de erro no console
    }

    return x + y; 
}

// chamando a função escondendo o diretorio do erro 

try { 
    console.log(soma(1,2))
    console.log(soma(1,'2'))
} catch (error) {
    //console.log(error)
    console.log('alguma coisa amigavel para o usuario *___*') // <- lançar erros feliz para o usuario kkk
}

// se ocorrer qualquer erro no bloco try catch sera executado. se não da break no try msm 
// um if else dos erros 


