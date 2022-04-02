class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }

  //metodo instãncia
  aumentarVolume() {
    this.volume += 2
  }

  diminuirVolume() {
    this.volume -= 2
  }

  //metodo estático
  static trocaPilha() {
    console.log('Pilhas trocadas')
  }
}

const controle1 = new ControleRemoto('LG')

ControleRemoto.trocaPilha()
controle1.aumentarVolume()
console.log(controle1)