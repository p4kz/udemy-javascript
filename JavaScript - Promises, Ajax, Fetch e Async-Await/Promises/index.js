
function random(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(msg)
    }, tempo)

  })
}

esperaAi('Conexão com a base de dados', random(1, 3))

  .then(response => {
    console.log(response)
    return esperaAi('Buscando dados na base', random(1, 3))
  })
  .then(response => {
    console.log(response)
    return esperaAi('Tratando os dados da base', random(1, 3))
  })
  .then(response => {
    console.log(response)
  })
  .then(response => {
    console.log('Exibe os dados')
  })

  