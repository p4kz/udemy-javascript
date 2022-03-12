

const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setRusult('Peso invalido', false);
        return;
    }

    if (!altura) {
        setRusult('Altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu imc é ${imc} (${nivelImc}).`;

    setRusult(msg, true);
    
});

function getNivelImc (imc){
    const nivel =['Abaixo do peso','Peso Normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2','Obesidade grau 3' ];

    if (imc>= 39.9) {
        return nivel[5];               //indice
    }
    
    if (imc >= 34.9) {
        return nivel[4];
    }
    
    if (imc >=29.9) {
        return nivel[3];
    }
    
    if (imc>=24.9) {
        return nivel[2];
    }
    
    if (imc>=18.5) {
        return nivel[1];
    }
    
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {    
    const p = document.createElement('p'); // cria um elemento
    return p;

}

function setRusult (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    
    const p = criaP();  

    if(isValid) {
        p.classList.add('paragrafo-result');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}