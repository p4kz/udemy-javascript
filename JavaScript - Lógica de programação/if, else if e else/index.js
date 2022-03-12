
/*

    ------------------------ * "if", "else if" e "else" * -------------------------

    if      - É uma estrutura condicional que executa a afirmação dentro do bloco.

    else if - Se caso a condição if não for suprida, else executa outa ação no bloco.
                                   
    else    - Só pode ser usado uma vez na checagem, no caso na ultima ação do bloco.

    ________________________________________________________________________________

    Notas:

    * if pode ser usado sozinho.

    * Sempre que utilizo a palavra else, preciso de um if antes. 

    * Pode ter vários else if na checagem.

    * Podemos ultilizar condições sem else if, usando apenas if e else.

    _________________________________________________________________________________

*/

// Exemplo 

/* Imagine que a minha const é o horario de uma relógio e que em detertminado momento 
quero que ele de os devidos cumprimentos: 

*                       Entre 0 e 11  = Bom dia
*                       Entre 12 e 17 = Boa tarde 
*                       Entre 18 e 23 = Boa noite    

*/

const hora = 11;

if (hora >= 0 && hora <= 11) {
    console.log ('Bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log ('Boa Tarde')
} else if (hora >= 18 && hora <=23){
    console.log('Boa noite');
} else {
    console.log("Acima ou Abaixo de qualquer horario dito na tabela")
}

//se isso (hora >= 0 && hora <= 11) ocorrer, faça isso {código}
// se não faça isso {código}

// assim que ele chega em uma condição verdadeira ele pula pro proximo bloco 
// se precisa de mais condições else if. 