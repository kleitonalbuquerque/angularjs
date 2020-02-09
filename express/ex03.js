const express = require('express')
const server = express()

server.use('/api', (req, res, next) => {
  console.log('Início...')
  next()
  console.log('Fim.')
})

server.use('/api', (req, res) => {
  console.log('Resposta...')
  res.send('<h1>API</h1>')
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))