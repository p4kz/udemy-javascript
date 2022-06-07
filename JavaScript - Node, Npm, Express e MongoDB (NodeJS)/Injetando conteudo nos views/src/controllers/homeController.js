exports.paginaInicial = (req, res) => {
  res.render('index',{
    titulo: 'este é o titulo',
    numeros: [0, 1 ,2 ,3 , 4, 5, 6, 7,]
  })
}

exports.trataPost = ( req, res ) => {
  res.send('Nova rota de post')
}