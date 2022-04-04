
function random(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo) {

  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false)

    setTimeout(() => {
      resolve(msg + ' - passei na promise')
    }, tempo)

  })
}

//Primise.all - Promise.race - Promise.resolve - Promise.reject 

const promises = [
  'valor  1',
  esperaAi('promise 1', 6000),
  esperaAi('promise 2', 300),
  esperaAi('promise 3', 3000),
  'outro valor'
]

//Entrega tudo de uma vez, assim que tudo estiver carregado
Promise.all(promises)
  .then((valor) => {
    console.log(valor)
  })
  .catch((erro) => {
    console.log(erro)
  })