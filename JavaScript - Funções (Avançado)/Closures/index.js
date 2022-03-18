function retornaFuncao () {
    const nome = 'luiz';
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('jjoão');
const funcao2 = retornaFuncao('luiz');
console.dir(funcao)
console.dir(funcao2)
console.dir(funcao(), funcao2())