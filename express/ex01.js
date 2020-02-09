const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('<h1>Index</h1')
})

server.all('/teste', (req, res) => {
  if (res.status(200)){
    res.send('<h1>Teste</h1>')
  } 
})

server.get(/api/, (req, res) => {
  res.send('<h1>API<h1>')
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))