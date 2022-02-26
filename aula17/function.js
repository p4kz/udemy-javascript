//function pode recebe valor, pode executar uma ação ou pode retornar valor 
// a function não lê nada abixo do 'return' 

// Exemplo

        // function saudacao(nome){
        //     console.log();
        //     return `Bom dia ${nome}`;            
        // } 
        // const variavel = saudacao('marta');
        // console.log(variavel);

//-->________________________________________________

        // function soma(x,y){
        //     const resultado = x + y;
        //     return resultado;
        // }
        // console.log(soma(2, 2));

//-->________________________________________________

        // function soma(x = 1,y = 2){
        //     const resultado = x + y;
        //     return resultado;
        // }

        // console.log(soma());

//a arrow function substitui a palavra 
//function no codigo e em alguns 
//casos vale a pena usar a function escrita e 
//outras não; o return tbm é abreviado   

        // const raiz = function(n) {
        //     return n ** 0.5;
        // }
        // console.log(raiz(9));
        // console.log(raiz(16));
        // console.log(raiz(25));
//-->__________________________________________________

        const raiz = n => n ** 0.5    
        console.log(raiz(9));
        console.log(raiz(16));
        console.log(raiz(25));