
//função construtura

function criaPessoa(nome, sobrenome, a, p) {
    return {

        //dados
        nome, 
        sobrenome,
        
        altura: a,
        peso: p,

        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //setter 
        set nomeCompleto(valor) {
          valor = valor.split('')
          this.nome = valor.shift()
          this.sobrenome = valor.join(' ') 
        },

        //pessoa fala
        fala: function(assunto){
            return `${this.peso} esta falando ${assunto}.`
        },
        
        // calcula imc

        imc() {
            const indice = this.peso /(this.altura ** 2)  
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('wolpak', 'salamandra', 1.8 , 80)
const p2 = criaPessoa('maria', 'maria', 1.5 , 40)
const p3 = criaPessoa('eric', 'mendonça', 1.9 , 100)

console.log(p1.imc())
console.log(p2.imc())
console.log(p3.imc())

// const p1 = criaPessoa('eric', 'mendonça', 1.80 , 80)
// p1.nomeCompleto = 'maria clovis alacadrabra';
// console.log(p1.nomeCompleto)
// console.log(p1.imc())
// console.log(p1.nome)
// console.log(p1.sobrenome)
// console.log(p1.imc())


// console.log(p1.fala('javaScript'))


// this sempre vai se referirir a pessoa que esta falando 
// this se refere ao objeto inteiro 
// this refere-se ao objeto que esta chamando ele na function
