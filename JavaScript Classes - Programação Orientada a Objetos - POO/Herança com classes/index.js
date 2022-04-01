
class DispositivoEletronico {
    constructor (nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' ja ligado')
            return
        }

        this.ligado = true
    }

    desligar () {
        if (!this.ligado) {
            console.log(this.nome + ' ja desligado')
            return
        }

        this.ligado = false
    }
} 

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor (nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    ligar() {
        console.log('olha, vc alterou o metodo ligar')
    }
}

const t1 = new Tablet('iPad', true)
t1.ligar() //<- buscando no metodo tablet
console.log(t1.ligado) // pegando no metodo pai

const s1 = new Smartphone('Samsung', 'preto', 'galaxy s10')
s1.ligar()
console.log(s1)


// const d1 = new DispositivoEletronico('telefone')
// d1.ligar()
// d1.ligar()
// console.log(d1)