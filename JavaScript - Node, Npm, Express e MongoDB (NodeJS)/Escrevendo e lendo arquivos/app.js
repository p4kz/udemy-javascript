const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')
// criando um arquivo// flag w ele cria a frase e subititui a frase que ja estava la  e a flag a cria concatenando 


// const pessoas = [
//   {nome: 'eric'},
//   {nome: 'p4k'},
//   {nome: 'maria'},
//   {nome: 'jão'},
//   {nome: 'mari'},
//   {nome: 'cleber'} 
// ]

// const json = JSON.stringify(pessoas, '', 2) // criando json 
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
  const dados = await ler(caminho)
  renderizaDados(dados)
}

//lendo arquivos
function renderizaDados(dados) {
  dados = JSON.parse(dados)
  dados.forEach(val => console.log(val.nome))
}

leArquivo(caminhoArquivo)
