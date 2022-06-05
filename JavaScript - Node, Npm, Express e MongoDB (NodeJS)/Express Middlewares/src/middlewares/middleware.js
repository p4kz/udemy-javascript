exports.middlewareGlobal = (req, res, next) => {
  console.log()
  console.log('Passei no middleware global')
  console.log()

  if (req.body.cliente) {
    console.log(`vi que você postou ${req.body.cliente}`)
  }
  next()
}

exports.outroMiddleware = (req, res, next) => {
  console.log()
  console.log('Outro middleware')
  console.log()
  next()
}