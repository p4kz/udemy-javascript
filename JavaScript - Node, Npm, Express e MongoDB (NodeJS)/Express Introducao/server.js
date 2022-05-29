const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      nome : <input type="text" name="name">
      <button>Enviar</button>
    </form>
  `)
})

app.post('/', (req, res) => {
  res.send('Recebi o form')
})

app.get('/contato',(req, res) => {
  res.send('hello contato')
} )

app.listen(3000, () => {
  console.log('Server is running')
})