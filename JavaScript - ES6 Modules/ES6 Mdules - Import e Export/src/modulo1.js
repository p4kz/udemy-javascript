const nome = 'eric'
const sobrenome = 'mendonça'
const idade = 30 

function soma(x, y ) {
  return x + y 
}


// exportando na crição -> dream export
export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}

// export individual
export { nome, sobrenome, idade, soma }




