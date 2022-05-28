const fs = require('fs').promises
// fs.writeFile(caminhoArquivo, 'frase1\n', { flag: 'w' } )  

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, {flag: 'w'})  
}