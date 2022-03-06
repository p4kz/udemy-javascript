const elementos = [
    {tag: 'p', texto: 'frase1'},
    {tag: 'div', texto: 'frase2'},
    {tag: 'footer', texto: 'frase3'},
    {tag: 'section', texto: 'frase4'},
]

const container = document.querySelector('.container'); // <- indentificando caixa do html  
const div = document.createElement('div');              // <- criando div main

for (let i = 0; i < elementos.length; i++) {            // <- instruindo for
    let {tag, texto} = elementos[i];                    // <- o que eu quero desestruturar e o indice
    let tagCriada = document.createElement(tag);        // <- criando a tag da string da const elementos
    tagCriada.innerHTML = texto;                        // <- inserindo texto dentro das tags no html
    div.appendChild(tagCriada);                         // <- adiciona todas as tags dentro de uma div. div primeiro filho 
}
container.appendChild(div);

//------------ minha solução F... 
//const h1 = document.querySelector('.container');

// let p = 'texto 1'
// let div = 'texto 2'
// let section = 'texto 3'
// let footer = 'texto 4'

// h1.innerHTML = (
// `<p>${p}</p>` +
// `<div>${div}</div>` +
// `<section>${section}</section>`+
// `<footer>${footer}</footer>`
// )



