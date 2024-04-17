const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ooi', function (req, res) {
    res.send('Olá Ewelyn!')
  })

  // lista de items
  const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

  // endpoint Read All -> [GET] /items
  app.get('/items', function (req, res){
    res.send(lista)
  })

app.listen(3000)