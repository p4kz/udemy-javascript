const fs = require('fs').promises // file sistem
const path = require('path')

// fs.readdir(path.resolve(__dirname))
//   .then(files => console.log(files))
//   .catch(e => console.log(e))


async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir)

  walk(files, rootDir)
}

async function walk(files, rootDir) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)
    
    if (/\.git/g.test(fileFullPath)) continue //tirando arquivos do git na busca
    if (/node_modules/g.test(fileFullPath)) continue //tirando arquivos node modules da busca
    
    if (stats.isDirectory() ){
      readdir(fileFullPath)
      continue
    }
    
    // if (!/\.css/g.test(fileFullPath)) continue // buscando arquivos css

    if (!/\.html/g.test(fileFullPath)) { // buscando arquivo html
      console.log(fileFullPath)
    }
    console.log(file)
  }
}

readdir(`/Projetos/udemy-js/`)