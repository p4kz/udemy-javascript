
/* 01/01/1970 Timestamp unix ou época unix 

Seu eu quero uma data anterior valor negativo, Posterior positivo 

*/
//      Concertando o fuso horário   
//const tresHoras = 60 * 60 * 3 * 1000; //  <- Tres horas em milesimos de segundo 
//const umDia = 60 * 60 * 24 * 1000; // <- Um dia em milesimos de segundo
//const data = new Date(0 + tresHoras - umDia); // <- Marco zero
//console.log(data.toString());

//                           Formato
//const data = new Date(2019, 3, 20, 15, 14, 27, 500); // Ano, Mês, Sia, Hora, Minutos, Segundos, Milesimo de segundo 

//                       Formato em string
//const data = new Date('2019-04-20 20:20:59'); 

//const data = new Date();
//console.log('Ano', data.getFullYear());
//console.log('Mês', data.getMonth() + 1);                   // mês começa no zero, por isso o + 1 
//console.log('Hora', data.getHours());
//console.log('Minuto', data.getMinutes());
//console.log('Millisecond', data.getMilliseconds());
//console.log('Dia da semana', data.getDay() + 1);           // 0 é domingo e, e 6 é sábado, por isso o + 1 
//console.log(data.toString());
//console.log(Date.now());                                   // sabendo o dia de hj em milliseconds desde a época unix

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; //<- se os segundos for maior igual a 10 ele retorna um zero pra não ficar em branco 
}
function formatData (data) {
    const dia  =  zeroAEsquerda  (data.getDate());
    const mes  =  zeroAEsquerda  (data.getMonth()) + 1;
    const ano  =  zeroAEsquerda  (data.getFullYear());
    const hora =  zeroAEsquerda  (data.getHours());
    const min  =  zeroAEsquerda  (data.getMinutes());
    const sec  =  zeroAEsquerda  (data.getSeconds());

    return`${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formatData(data)
console.log(dataBrasil);