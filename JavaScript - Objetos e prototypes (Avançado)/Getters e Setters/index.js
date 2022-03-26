function Produto (nome, preço , estoque ) {
    this.nome = nome
    this.preço = preço 

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  
        configurable: false,
        get: function() {
            return estoquePrivado
        },
        
        set: function (valor){
            if (typeof valor !== 'number'){
                console.log('valor errado')
                return
            }
            estoquePrivado = valor
        }
    })
}

function criaProduto (nome) {
    return{
        get nome() {
            return nome
        },
        set nome (valor) {
            valor = valor.replace('coisa.', '') 
            nome = valor
        }
    }
}

const p2 = criaProduto('camisa')
p2.nome = 'qualquer coisa.'
console.log(p2.nome)

// const p1 = new Produto('camiseta', 20, 3)
// p1.estoque = 1000
// console.log(p1)
// console.log(p1.estoque)
