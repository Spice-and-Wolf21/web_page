const express = require('express')
const router = require('./src/rutas/main')
const path = require('path')

const server = express()

server.set('port', 3000)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'src', 'vistas')))

server.use('', router)

server.use('*', (req, res) => res.sendFile(path.join(__dirname, 'src', 'vistas', 'Inicio.html')))

server.listen(process.env.PORT || server.get('port'))
