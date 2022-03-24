
//literal
const pessoa = {
    nome: 'Eric',
    sobrenome:'Mendonça',
    idade: '23',
}

//acessando dinamicamente
const chave = 'nome'
console.log(pessoa[chave])

//________________________________

// construtor
const pessoa2 = new Object()
pessoa2.nome = 'eric'
pessoa2.sobrenome = 'Mendonça'
pessoa2.idade = '23'
pessoa2.falarNome = function(){
   console.log(`${this.nome} esta falando seu nome`) 
}

//delete pessoa2.nome //<- apagando chave nome
console.log(pessoa2)
pessoa2.falarNome()


// descobrindo o ano de nascimento 
pessoa2.getDataNacimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa2.getDataNacimento())


//for

for (let chave in pessoa2){
    console.log(pessoa2[chave])
}


//________________________________

//factory functions

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('eric', 'mendonça')
console.log(p1)
console.log(p1.nomeCompleto())

// constructor function
// new cria um obj vazio {} 
function Pessoa1(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

const p2 = new Pessoa1('eric', 'mendonça')
console.log(p2)