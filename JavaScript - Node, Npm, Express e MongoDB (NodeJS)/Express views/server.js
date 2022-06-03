const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))

// Views
// Caminho absoluto -> Mas poderia ser ./src/views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs') // <- ejs? um html??

app.use(routes)

app.listen(3000, () => {
  console.log('Server is running')
})