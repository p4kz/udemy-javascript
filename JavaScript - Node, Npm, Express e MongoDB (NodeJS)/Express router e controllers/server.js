const express = require('express')
const app = express()

const routes = require('./routes')
app.use(routes)

app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('Server is running')
})