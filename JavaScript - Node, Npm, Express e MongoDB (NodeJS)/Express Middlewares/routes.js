const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Rotas da home
route.get('/', homeController.paginaInicial, function (req, res, next){
  console.log('')
  console.log('ainda aqui')
  console.log('')
})
route.post('/', homeController.trataPost)

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route