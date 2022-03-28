
//Reaproveitar codigos 

//new Object -> Object.prototype
const objA = {
    chaveA:'A'

    // __proto__ : Object.prototype
}

const objB = {
    chaveB:'B'

    //__proto__ : Object.prototype
}

const objC = new Object() 
objC.chaveC = 'C'



Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

//console.log(objC.chaveA)

//______________________________________________

function Produto (nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))   
}

//______________________________________________

const p1 = new Produto('camiseta', 50)
p1.desconto(0)
p1.aumento(100)
console.log(p1)

//______________________________________________

//literal
const p2 = {
    nome: 'caneca',
    preco: 10,
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(0)
p2.aumento(100)
console.log(p2)


//______________________________________________




const p3 = Object.create(Produto.prototype, {
    preco : {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43.
    } 
})

p3.desconto(0)
p3.aumento(10)
console.log(p3)

