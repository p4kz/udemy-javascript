const express = require('express')
const res = require('express/lib/response')
const app = express()

//www.umsite.com/profiles/1234?campanha=googleads&nome_da_campanha 

// www.umsite.com/profiles/1234 ?  === parans 
// campanha=googleads &            === query strings
// nome_da_campanha                === body

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      nome : <input type="text" name="name">
      <button>Enviar</button>
    </form>
  `)
})
// ? param opcional 
app.get('/test/:idUser?/:params?', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(req.params)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Recebi o form')
})

app.listen(3000, () => {
  console.log('Server is running')
})