/*


try {
    // é executada quando não dá erros
} catch (e){
    // é executada quando dá erros 
} finally {
    // será executada sempre
}


*/

// try {
//     console.log('abri um arquivo')
//     console.log('manipulei o arquivo e gerou erro') //se der erro aqui 
//     console.log('fechei um arquivo')
//     // try dentro do try 
//     try{
//         console.log(b)
//     } catch {
//         console.log('deu erro')
//     }

// } catch (e){
//     console.log('Tratando o erro') //ele pula pra ca sem fechar o arquivo
// } finally {
//     console.log('eu fecho o arquivo')
// }


function retornaHora (data) {
    if (data && !(data instanceof Date)){
        //console.log('não é')
        throw new TypeError('esperando instância de date')
    }

    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-19970 12:59:12')
    const hora = retornaHora(111111) // <- lançar o numero pra dar erro 
    console.log(hora)    
} catch {
    console.log('Erro bonito')
} finally{
    console.log('Tenha um bom dia')
}
