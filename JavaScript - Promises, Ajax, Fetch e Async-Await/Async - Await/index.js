function random(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo) {

  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') 
    reject('err')

    setTimeout(() => {
      resolve(msg + ' - passei na promise')
    }, tempo)

  })
}

/*
*/

async function executa() {

  try {
    const fase1 = await esperaAi('fase 1', random(0, 2))
    console.log(fase1)

    const fase2 = await esperaAi('fase 2', random(3, 4))
    console.log(fase2)

    const fase3 = await esperaAi('fase 3', random(2, 4))
    console.log(fase3)
  
    console.log('terminamos na fase', fase3)
  } catch (error) {
    console.log('Fatal error')
  }
}

executa()


//____________________________________________________________ 

// esperaAi('fase 1', random(0, 3))
//   .then(valor => {
//     console.log(valor)
//     return esperaAi('fase 2', random(1, 6))
//   })
//   .then(fase => {
//     console.log(fase)
//     return esperaAi('fase 3', random(2, 4))
//   })
//   .then(fase => {
//     console.log(fase)
//     return fase
//   })
//   .then('terminamos na fase', fase)
//   .catch(e => console.log(e)) 

  // catch <- tratando erros 