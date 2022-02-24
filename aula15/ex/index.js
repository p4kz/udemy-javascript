const numero = Number(prompt('digite seu numero:'));
//numero = Number(numero);

const numTitulo = document.getElementById('numeroTitulo');
const textoTitulo = document.getElementById('texto');

numTitulo.innerHTML = numero;
texto.innerHTML  +=`<p>Seu numero + 2 é ${numero + 2}</p>`;
texto.innerHTML  +=`<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML  +=`<p> ${numero + 2} é interiro : ${Number.isInteger(numero)}.</p>`;
texto.innerHTML  +=`<p> é nan : ${Number.isNaN(numero)}.</p>`;
texto.innerHTML  +=`<p> arredodando pra - : ${Math.floor(numero)}.</p>`;
texto.innerHTML  += `<p> arredodando pra - : ${Math.ceil(numero)}.</p>`;

//console.log(numTitulo);  >>>>>>>>>>>> += soma as coisas 