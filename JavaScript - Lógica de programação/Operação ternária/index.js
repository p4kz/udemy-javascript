/* 
Operação ternaria 
*      2 :

*/
//exemplo

// imagina que temos uma pontuação de usuario, usuario vip e usuario normal

const pontuacaoUsuario = 999;
//                                                valor para     valor para  
//                     (condição) maior igual ?   verdadeiro  :    falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal';

console.log(nivelUsuario);


//ao inves de usar if usar ternaria em condiçoes mais simples 

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

