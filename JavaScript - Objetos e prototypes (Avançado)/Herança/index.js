// produto -> aumento, desconto
// Camiseta = cor, caneca = material, lapis

function Produto (nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

//________________________________________________


// linkando as function

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const produto = new Produto('gen', 111)

const camiseta = new Camiseta('regata', 7.5, 'preto')
camiseta.aumento(10)
console.log(camiseta)


//__________________________________________________

//Herdando  do produto 
function Caneca(nome, preco, material, estoque) {
    Produto.call ( this, nome, preco)

    // estendendo atributos 
    this.material = material 
    // this.estoque = estoque // <- simples e funcional

    // getters and setters. exemplo
    Object.defineProperty(this, 'estoque', {
        get: function() {
            return estoque
        },
        set: function() {
            if ( typeof valor !== 'number') return 
            estoque = valor
        }
    })

}

// linkando prototypes
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Object.prototype = Caneca


const caneca = new Caneca('caneca', 10, 'porcelana', 111)

console.log(caneca)