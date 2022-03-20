function Calculadora () {
    
    this.display = document.querySelector('.display')
    this.capturaClicks = () => {
        document.addEventListener('click', event => { 
            const el = event.target
            if (el.classList.contains('btn-num')) this.addNumDisplay(el) 
            if (el.classList.contains('btn-clear')) this.clear(el) 
            if (el.classList.contains('btn-dell')) this.del(el) 
            if (el.classList.contains('btn-eq')) this.realizaConta(el) 
        })
        
    }

    this.inicia = () => {

        this.capturaEnter()
        this.capturaClicks()
    }

    this.capturaEnter = () =>{ //add enter 
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13 ) {
            this.realizaConta()

            }
        })
    } 
    
    this.addNumDisplay = (el) => {
        this.display.value += el.innerText
        this.display.focus() // <- reset de focus correção 
    }

    this.clear = (el) => this.display.value = '' //Limpa display
    
    this.del = (el) => this.display.value = this.display.value.slice(0, -1) // remove um number no display

    this.realizaConta = () => { // realiza conta e trata erros de usuario
        try {
            const conta = eval(this.display.value)

            if(!conta) {  // se a conta for falsa retorna alert
                alert('conta invalida')
                return
            }

            this.display.value = conta // se não faz a conta 
        } catch{
            alert('conta invalida')
            return
        }
    }
}

const calculadora = new Calculadora()
calculadora.inicia()