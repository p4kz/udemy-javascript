// const pessoa1 = {
//     nome: 'clovis',
//     sobrenome: 'medina',
//     idade: 25,
// };

// console.log (pessoa1.nome);
// console.log (pessoa1.sobrenome);
// console.log (pessoa1.idade);

    // function criaPessoa (nome, sobrenome, idade){
    //     return{
    //         nome,
    //         sobrenome,
    //         idade,
    //     }
    // }

    // const pessoa1 = criaPessoa('Eric', 'Mendonça','25');
    // const pessoa1 = criaPessoa('laun', 'Mendonça','33');
    // const pessoa1 = criaPessoa('clovis', 'Mendonça','24');
    // const pessoa1 = criaPessoa('boris', 'Mendonça','44');
    // const pessoa1 = criaPessoa('toris', 'Mendonça','66');
    // const pessoa1 = criaPessoa('tais', 'Mendonça','77');
    // const pessoa1 = criaPessoa('nãosei', 'Mendonça','22');


    // console.log(pessoa1.nome);


const pessoa1 = {
    nome: 'eric',
    sobrenome:'mendonça',
    idade: '25',

    fala(){
        console.log(`${this.sobrenome} esta falando oi...`);
    }

    // incrementaIdade() {
    //     this.idade++;
    // }
};

pessoa1.fala();