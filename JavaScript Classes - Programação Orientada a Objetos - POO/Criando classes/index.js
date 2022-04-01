
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar () {
        console.log('falando')
    }

    comer() {
        console.log('comendo')
    }

    beber() {
        console.log('bebendo')
    }
}

const p1 = new Pessoa('eric', 'sobrenome')
console.log(p1)


//____________________________________________

function Pessoa2 (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome 

}

Pessoa2.prototype.falar = function() {
    console.log('falando')
}

const p2 = new Pessoa('eric', 'mendonça')
console.log(p2)