// for in lê o indices ou chaves do objeto 

// const frutas = ['pera', 'maçã', 'uva',]; //<- vetor(array)
// for (let i in frutas ){ // <- lendo o objeto 
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'eric',
    sobrenome: 'mendonça',
    idade: 23,
}; 
for (let i in pessoa ){ // <- lendo o objeto 
    //console.log(pessoa[i]);
    
}

//console.log(pessoa.nome); //acessando atributo especifico no objeto
const chave = 'nome';
console.log(pessoa[chave]); //acessando atributo especifico no objeto