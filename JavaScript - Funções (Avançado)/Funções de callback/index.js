

function rand(min = 1000, max = 3000) {  // <- gerando um numero aleatorio
    const num = Math.random() * (max - min ) + min;
    return Math.floor(num);
}

//console.log(rand())


function f1(callback){
    setTimeout(function() {
        console.log('f1')
        if (callback) callback();
    },rand()); //<- randomizando a ordem de aparecer no console
    
}


function f2(callback){
    setTimeout(function() {
        console.log('f2')
        if (callback) callback();   
    },rand());
    
}

function f3(callback){
    setTimeout(function() {
        console.log('f3')
        if (callback) callback(); 
    },rand());
    
}

// ordem randomica 

// f1()
// f2()
// f3()
// console.log('ola mundo')



//colocando as coisas em ordem com call back hell

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('olá mundo');
//         });
//     });
// });


// _____________________ ou se pá mais correto 

f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f2(f2Callback);
}

function f3Callback(){
    console.log('olá mundo')
}

