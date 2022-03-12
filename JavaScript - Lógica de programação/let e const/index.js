const verdadeira = true;

// let tem escopo de bloco {...  bloco}
// Var so tem escopo de função
// Var pega coisas do escopo global

let nome = 'Luiz'; // criando 
var nome2 = 'luiz';

if (verdadeira) {
    let nome = 'Otávio'; // criando
    //console.log(nome, nome2);

    if(verdadeira) {
        let nome = 'outra coisa';
        console.log(nome, nome2);
    }
}