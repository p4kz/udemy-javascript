
// import
const mod1 = require('./mod1')

// para importar uma função expecifica
const mod2 = require('./mod1').falaNome

// desestruturando e importando
const { nome, sobrenome , falaNome } = require('./mod1') 

// console.log(mod1.falaNome())


// Class
const { Pessoa } = require('./mod1')

const p1 = new Pessoa('Eric')
console.log(p1)