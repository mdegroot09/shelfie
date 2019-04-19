const express = require('express')
const app = express()

const port = 4000

const ProductCtrl = require('./controller')

app.use(express.json())

app.listen(port, () => {
  console.log('Listening on port:', port)
})