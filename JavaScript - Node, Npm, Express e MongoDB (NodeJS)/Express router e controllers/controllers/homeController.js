
exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
      nome : <input type="text" name="name">
      <button>Enviar</button>
    </form>
  `)
}

exports.trataPost = ( req, res ) => {
  res.send('Ei, sou sua nova rota de post')
}