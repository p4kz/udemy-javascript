
// function criaPessoa (nome, sobrenome) {
//     const pessoaPrototype = {
//         falar() {
//             console.log(`${this.nome} esta falando`)
//         },

//         comer() {
//             console.log(`${this.nome} esta comendo`)
//         },

//         beber() {
//             console.log(`${this.nome} esta bebendo`)
//         },
//     }
    
    
//     return  Object.create(pessoaPrototype, {
//         nome:{value: nome},
//         sobrenome:{value: sobrenome},
//     })
// }



// const p1 = criaPessoa('eric' , 'mendonça')
// const p2 = criaPessoa('maria', 'mendonça')
// console.log(p2)

//___________________________________________________________________


const falar = {
    falar() {
        console.log(`${this.nome} esta falando`)
    }, 
}

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`)
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} esta bebendo`)
    },
}

const pessoaPrototype = {...falar, ...comer, ...beber}
//const pessoaPrototype = ({}, falar, comer, beber)


function criaPessoa (nome, sobrenome) {
       
    return  Object.create(pessoaPrototype, {
        nome:{value: nome},
        sobrenome:{value: sobrenome},
    })
}

const p1 = criaPessoa('eric' , 'mendonça')
const p2 = criaPessoa('maria', 'mendonça')
console.log(p2)
