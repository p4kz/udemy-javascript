// console.log('linha1');
// console.log('linha2');
// console.log('linha3');
// console.log('linha4');
// console.log('linha5');
// console.log('linha6');

// esqueleto

// for () {
    
// }

// 3 coisas que precisa por for classico 
// criar uma varialvel no ()
// criar um condição que vai parar o laço
// 1 - incrementar ou decrementar a variavel de controle
// i = index
// da pra fazer repetiçoes do jeito que quiser 
//-------------------------------
// i += 10 ele pula de 10 em 10 
    //let i = 0; variavel// i<=5; condição// i++ repetição
// for (let i = 400; i<=500; i++) {
//     console.log(`linha ${i}`);
// }

//__________________________________
//checando se é par ou impar formula

// for (let i = 0; i<=10; i++) {
//     const par = i % 2=== 0 ? 'Par' : 'Impar';
//     console.log(1, par);
// }

//______________________

//automatizando a busca no index do array  

const frutas = ['maçã', 'pera' , 'uva'];
for (let i = 0; i < frutas.length; i++) {
    
    console.log(`index ${i}`, frutas[i]);
}
