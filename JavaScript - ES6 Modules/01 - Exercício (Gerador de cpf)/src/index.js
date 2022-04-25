import './assets/css/styles.css'
import GeraCpf from './modules/GeraCPF'

(function() {
  const gera = new GeraCpf()
  const cpfGerado = document.querySelector('.cpf-gerado')

  cpfGerado.innerHTML = gera.geraNovoCpf()
})()