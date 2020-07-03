const express = require('express')
const https = require('https')
const fs = require('fs')

const PORT = 443

const app = express()
const server = https
  .createServer(
    {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    },
    app.use(express.static('public_html'))
  )
  .listen(PORT, function() {
    console.log('listening')
  })
