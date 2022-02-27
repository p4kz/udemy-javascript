/*

    ------------------------ * Operadores Lógicos * ------------------------

                                   
    && - E (and)   Dois ou mais dados precisam ser iguais. (Para retornar true).  
    || - Ou (or)   Precisa de um dos dados iguais. (Para retornar true). 
    !  - Não (not) Inverte uma expressão. (!true passa a ser false)


    ________________________________________________________________________

    Notas:


    * São usados para checar mais de uma comparação.

    * Não fiz exemplos sobre ! (not) porque ja esta auto explicativo.  


    ________________________________________________________________________

*/

// Exemplo

// Supondo que tenho um usuario em uma base de dados.

    const  usuario = 'Eric';
    const  senha = '12345';       
    
// Usuario precisa entrar usando os parâmetros da base de dados.

    /* O usuario precisa de dois parâmetros identicos ao da base de dados
    "usuario e senha". (usuario && senha). */

    const entrar = usuario === 'Eric' && senha === '12345';   //true

    /* O usuario precisa de um dos parâmetros identicos ao da base de dados 
    "usuario ou senha". (usuario || senha). */

    const entrar = usuario === 'Eric' || senha === 'abcde';    // true 

    console.log(entrar);
