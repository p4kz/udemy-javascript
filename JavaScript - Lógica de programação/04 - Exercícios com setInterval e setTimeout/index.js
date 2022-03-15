function criaHoraDosSegundos (segundos) {
    const data = new Date (segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:'UTC'
    })
}

const relogio = document.querySelector('.relogio')
const inciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos) //<- colocando o segundos dentro da mascara criaHoraSegundos 00:00:00
    },1000)
}

inciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado') //<- remove a cor quando start
    clearInterval(timer)
    iniciaRelogio()
})

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado') // <- add color quando ativo
    clearInterval(timer)
})

zerar.addEventListener('click', function(event) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0

})