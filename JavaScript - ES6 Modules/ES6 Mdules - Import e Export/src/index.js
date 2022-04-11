import { nome, sobrenome, idade, soma } from './modulo1'
import { Pessoa } from './modulo1'

// importando modulo inteiro 
import * as MeuModulo from './modulo1'
console.log(MeuModulo)

// Pessoa
const p1 = new Pessoa('eric', 'maaaadeira')
console.log(p1)

console.log(nome, sobrenome, idade, soma(5, 5))