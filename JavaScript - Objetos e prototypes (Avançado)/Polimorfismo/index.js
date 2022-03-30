// metodo se comportando de forma diferente em classes filhas de um mesmo pai - polimorfismo
// exemplo conta bancaria conta corrente e conta popança(>>>) 

// super classe
function Conta(agencia, conta , saldo) {
    this.agencia = agencia
    this.conta = conta 
    this.saldo = saldo
}


Conta.prototype.sacar = function(valor) {
    if ( valor > this.saldo) {
        console.log(`Saldo insuficiente - Saldo atual: ${this.saldo}`)
        return
    }
    this.saldo -= valor
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(
     `ag/c: ${this.agencia}/${this.conta} | ` + 
     `Saldo: R$${this.saldo.toFixed(2)}`
    )
}

// const conta1 = new Conta(11, 22, 10)
// conta1.depositar(100)
// conta1.sacar(111)
// console.log(conta1)

//______________________________________________________________

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite    
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if ( valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente - Saldo atual: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

// const ContaCorrente1 = new ContaCorrente(11, 11, 0, 100)
// ContaCorrente1.depositar(10)
// ContaCorrente1.sacar(210)

// ________________________________________________________________

function ContaPopanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPopanca.prototype = Object.create(Conta.prototype)
ContaPopanca.prototype.constructor = ContaPopanca

const ContaPopanca1 = new ContaPopanca(33, 33, 0, 34)
ContaPopanca1.depositar(10)
ContaPopanca1.sacar(210)
