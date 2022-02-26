function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = 
    document.querySelector('.resultado');

    const pessoas = []; //array
    
    function recebeEventoForm (evento) {
        evento.preventDefault(); // para não atualizar a pagina 

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
     
        pessoas.push({ //mando para array
            nome: nome.value,
            sobrenome: sobrenome.value, 
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);

        resultado.innerHTML +=`<p>${nome.value} 
        ${sobrenome.value}` + 
        `${peso.value} ${altura.value}</p>`; 
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo ();


    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('Teste');
    //     console.log('Foi Enviado')
    // };