//return - retorna um valor * termina a função

function soma(a , b) {
    return a + b
}

function soma2(a, b) {
    console.log(a + b)
}
console.log(soma2(5, 2))



//____________________________________

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('jao', 'jão') //

const p2 = {  // mesma resposta no console 
    nome: 'jão',
    sobrenome:'pão',
}

console.log(p1)
console.log(p2)
//______________________________________

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + '' + resto;
    }

    return falaResto
}

const olaMundo = falaFrase('olá')

console.log(olaMundo('mundo'))