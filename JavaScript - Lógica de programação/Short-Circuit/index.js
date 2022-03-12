
/*

    --------------------------- * Short-Circuit * ------------------------------

    &&  -  And - E
    ||  -  Or - ou                            

    ------------------------------ Falsy-Value ---------------------------------

    todos os valores que são avaliados como false(falsy) em um contexto boolean

    *                          false   
    *                         undefined   
    *                           null       
    *                           NaN
    *                            0
    *                           ''                 - Strings vazias 
    
    Qualquer diferente disso é avaliada em true no js 
    
    ____________________________________________________________________________

    Notas:

    * No &&(and) de acordo, que o js vai lendo o codigo e covertendo para boolean
    se o resultado da conversão for falso ele não avalia o restante e retorna
    extamente o valor do false no console.     
    
    * No ||(or) ao contrario do and ele vai retornar o primeiro valor true(verdadeiro)
    e retorna extamente esse valor no console seja ele qual for.

    ____________________________________________________________________________

*/ 

// Exemplos

/* A partir do momento que achar o valor falsy, o js responde exatamente o nome do primeiro valor.
*/

console.log('Eric' && 0 && true && true && NaN); /* Nesse caso ele reponde 0, e não o NaN. 
*/

console.log(false || 0 || "" || 'Eric' || NaN ); /* Nesse caso ele responde 'Eric' o primeiro valor true.
*/   

function dizer (){
    return 'oi';
}

let executar = true;

console.log(executar && dizer());
