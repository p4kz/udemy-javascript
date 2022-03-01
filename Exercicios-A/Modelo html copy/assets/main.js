// const peso = 84;
// const altura = 1.8;

// let imc = peso / (altura * altura);

// console.log(imc)

function meuEscopo () {
    const form =document.querySelector('.form');
    const resultado = 
    document.querySelector('.resultado')

    const imc = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
       
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        imc.push({
            peso: peso.value,
            altura: altura.value,

        });

        console.log (imc);

        resultado.innerHTML +=`<p>${peso.value}` /`<p>${peso.value}`*`${altura}</p>`  
    }

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo ();

