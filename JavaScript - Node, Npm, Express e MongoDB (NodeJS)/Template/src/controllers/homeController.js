exports.paginaInicial = (req, res) => {
  res.render('index',{
    titulo: 'este é o titulo',
  })
}

exports.trataPost = ( req, res ) => {
  res.send('Nova rota de post')
}