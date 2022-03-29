
/*

 // Pegar os 9 primeiros digitos

 CPF= 705.484.450.52    (52) <- pra validar, a conta tem que gerar os 2 ultimos digitos identicos ao do cpf colocado 

 ----------[ Primeiro numero ]------------
 *          Multipicação
 7x | 0x| 5x| 4x| 8x| 4x| 4x| 5x| 0x                
 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2
//       soma - os resultados
 70 | 0 | 40| 28| 48| 20| 16| 15| 0 
 *          Result = 237
 11 - (237 % 11) = 5 (Primeiro digito)
 // Se o número digito for maior que 9, consideramos o 0. 
 
 -----------[ Segundo numero ]------------
 7x | 0x| 5x| 4x| 8x| 4x| 4x| 5x| 0x| 5x <- acrencenta o 0 resultado anterior (5)
 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 2
 70 | 0 | 40| 28| 48| 20| 16| 15| 0 | 10
 *             Result = 284
 11 - (284 % 11) = 2 (Ultimo dígito)

 ------------[   Por ultimo   ]------------
 *   705.484.450.52  === 705.484.450.52  * 

*/


function ValidaCPF (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo',{  
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        } 
    })  
}

// conferindo se o cpf não é undefined e checando se ele tem 11 digitos
ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11 ) return false
    if ( this.isSequence()) return false
    
    const cpfParcial = this.cpfLimpo.slice(0, -2) // pegando os 9 digitos
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)   
    const novoCpf = cpfParcial + digito1 + digito2

    console.log(novoCpf)
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    
    let regressivo = cpfArray.length + 1 
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0) 
    
    let digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito) 
}

ValidaCPF.prototype.isSequence = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

//=======================================>
// 705.484.450.52


let cpf = new ValidaCPF('705.484.450.52')

if (cpf.valida()) {
    console.log('CPF válido')
}else {
    console.log('CPF inválido')
}

