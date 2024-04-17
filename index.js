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

  // Endpoint Read By id -> [GET] /item/:id
  app.get('/item/:id', function (req, res) {
    const id = req.params.id
    const item = lista[id-1]

    res.send(`Item: ${item}`)
  })

  // Especificamos que o corpo das requisições será em JSON na nossa aplicação
  app.use(express.json())

  // Endpoint Create -> [POST] /item
  app.post('/item', function(req, res) {
    // Pegamos o item através do corpo da requisição
    // no obj JSON, pegamos a propriedade nome
    const item = req.body.nome

    lista.push(item)
    res.send(`Item adicionado com sucesso: ${item}`)
  })

app.listen(3000)