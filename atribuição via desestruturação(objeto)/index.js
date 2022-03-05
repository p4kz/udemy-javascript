const pessoa = {
    nome: 'eric',
    sobrenome:'mendonça',
    idade: 23,
    endereco: {
        rua: 'mario quintana',
        numero: '622'
    }

}

// atrubuição via desestruturação
// valor padrão caso não exista nome no objeto nome = '' //const {nome = 'não existe', sobrenome, idade} = pessoa;  

// const {endereco: {rua, numero}, // extraindo o obejto dentro do objeto via desestruturação
// endereco
// } = pessoa;
// console.log(rua, numero, endereco);

const {nome, ...resto} = pessoa; //<-- buscar o restante do objeto ...resto
console.log(nome, resto);