const express = require('express')
const server = express()

server.route('/clientes')
  .get((req, res) => res.send('Lista de Clientes'))
  .post((req, res) => res.send('Novo Cliente'))
  .put((req, res) => res.send('Altera Cliente'))
  .delete((req, res) => res.send('Remove Cliente'))

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))