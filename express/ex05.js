const express = require('express')
const server = express()
const router = require('./ex05_routes')

server.use('/api', router)

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))