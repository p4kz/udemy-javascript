function Produto (nome, preço , estoque ) {
    this.nome = nome
    this.preço = preço 
    this.estoque = estoque 

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave
        value: estoque,     // valor
        Writable: true,     // pode alterar o valor  
        configurable: false // pode apagar chave, reconfigurar a chave, alterar a chave
    })
}


const p1 = new Produto('camiseta', 20, 3)
p1.estoque = 1000
console.log(p1)

for(let chave in p1){
    console.log(chave)
}