/*

    ----------------- * Operadores de Comparação * ------------------


    >    -  Maior que (o "A" é maior que "B": true/false)
    >=   -  Maior que ou igual (é maior que, ou igual?)
    <    -  Menor que  (o "A" é menor que "B": true/false)
    <=   -  Menor que ou igual (é menor que, ou igual?)
    ==   -  Igualdade ( é igual a...)
    ===  -  Igualdade estrita (valor e tipo)
    !=   -  Diferente (valor)
    !==  -  Diferente estrito (valor e tipo)


    _________________________________________________________________
    
    Notas: 
    
    * Se comparar uma String com um Number ("5 =='5'") o == responde 
    com True. (Mesmo sendo completamente diferente "Type Correction").
    
    * O >= comparado com "10 >= 5" retorna true, porque o primeiro
    parametro é respondido primeiro, no caso "Maior".

    * Igualdade(==) e Diferente(!=) não será muito utilizado.

    __________________________________________________________________

*/

//Exemplo Teste 

const num1 = 10;
const num2 = 5;
const comp = num1 !== num2;
console.log(comp);