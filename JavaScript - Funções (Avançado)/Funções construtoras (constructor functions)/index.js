// função fabrica -> fabrica obejtos


// função construtora -> retorna objetos
// contrutora -> sempre iniciar com letra maiuscula - pra não esquecer do new - sempre chmar com new 
// ex Pessoa (new)

// new cria um objet vazio faz o this apontar para o objeto e retorna o corpo do objeto 

function Pessoa (nome, sobrenome){

    // privados
    const id = 'Atributos privados, não vai tar disponivel fora'
    const metodoInterno = function () {

    }

    // atributos ou metodos publicos
    this.nome = nome
    this.sobrenome + sobrenome

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa ('eric', 'mendonça')
const p2 = new Pessoa ('jose', 'machado')
p2.metodo()