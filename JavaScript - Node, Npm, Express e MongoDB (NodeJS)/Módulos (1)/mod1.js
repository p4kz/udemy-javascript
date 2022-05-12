const nome = 'eric'
const sobrenome = 'mendonça'

const falaNome = () => nome + " " + sobrenome 

// export

// 1
// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

// 2
// atalho msm resultado 
exports.nome = nome 
exports.sobrenome = sobrenome
exports.falaNome = falaNome

// 3
this.qualquerNome = 'teste teste'

console.log(module.exports)


// ----------------------- class test ----------------------

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

exports.Pessoa = Pessoa
