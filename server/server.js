const path = require('path')
const express = require('express')

const routes = require('./routes/routes')


const server = express()
server.use(express.static(__dirname + '/../dist'))
server.use(express.json())

server.use('/v1/', routes)
server.use('/v1/*', (req, res) => res.sendStatus(404))


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

module.exports = server
