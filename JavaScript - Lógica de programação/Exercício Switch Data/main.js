const h1 = document.querySelector('.container h1');
h1.innerHTML ='so pra vc ver'
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    let getDiaSemanaTexto;

    switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;

    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;

    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;

    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;

    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;

    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;

    case 6:
        diaSemanaTexto = 'Sabádo';
        return diaSemanaTexto;
}}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch(numeroMes){
    case 0:
        numeroMesTexto = 'Janeiro';
        return numeroMesTexto;

    case 1:
        numeroMesTexto = 'fevereiro';
        return numeroMesTexto;

    case 2:
        numeroMesTexto = 'março';
        return numeroMesTexto;

    case 3:
        numeroMesTexto = 'abril';
        return numeroMesTexto;

    case 4:
        numeroMesTexto = 'maio';
        return numeroMesTexto;

    case 5:
        diaSemanaTexto = 'junho';
        return diaSemanaTexto;

    case 6:
        diaSemanaTexto = 'julho';
        return diaSemanaTexto;

    case 7:
        diaSemanaTexto = 'agosto';
        return diaSemanaTexto;

    case 8:
        diaSemanaTexto = 'setembro';
        return diaSemanaTexto;

    case 9:
        diaSemanaTexto = 'outubro';
        return diaSemanaTexto;

    case 10:
        diaSemanaTexto = 'novembro';
        return diaSemanaTexto;

    case 11:
        diaSemanaTexto = 'dezembro';
        return diaSemanaTexto;

}}

function zeroAEsquerda (num) {
    return num  >= 10 ? num : `0 ${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    
    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ` +
    ` ${data.getFullYear()}` + 
    ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}   

h1.innerHTML = criaData(data);