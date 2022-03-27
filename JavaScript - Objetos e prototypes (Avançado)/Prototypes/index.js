
//prototype é uma chave global do objeto. ex: todas as pessoas vão ter o nome completo


// construtora -> (classe)
function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome
    //this.nomeCompleto = () => this.nome + '' + this.sobrenome
}
 
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + '' + this.sobrenome
}

// instancia

const pessoa1 = new Pessoa('luiz', 'O.') // <- Pessoa = Função construtora 
const pessoa2 = new Pessoa('maria', 'A.') // <- Pessoa = Função contrutora

//console.dir(pessoa1)
//console.dir(pessoa2)
//console.dir(data)
