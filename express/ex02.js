const express = require('express')
const server = express()

server.get('/', (req, res, next) => {
  console.log('Início...')
  next()
  console.log('Fim.')
})

server.get('/', (req, res) => {
  console.log('Resposta...')
  res.send('<h1>Olá Express!</h1>')
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))