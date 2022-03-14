function mostraHora() { //<- mostra a hora
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12:false

    });
}

function funcaoDoInterval(){
    console.log(mostraHora())
    
}

//setInterval(funcaoDoInterval, 1000)//<- vai configurar um intervalo de tempo pra dar att no timer


 const timer = setInterval(function(){
    console.log(mostraHora());
},1000 );

setTimeout(function(){ // <- pra parar o de rodar o timer 10000 ms
    clearInterval(timer)
}, 10000) 

setTimeout(() => { //<- mensagem apos 15000 ml
    console.log('Hello world')
},15000);