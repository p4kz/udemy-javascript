
const HomeModel = require('../models/HomeModel')

HomeModel.create({
  titulo: 'Um titulo de teste',
  descricao: 'descrição teste'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e))

//https://imgur.com/zPMaCOb

exports.paginaInicial = (req, res) => {
  res.render('index')
}

exports.trataPost = ( req, res ) => {
  res.send('Nova rota de post')
}