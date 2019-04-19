require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ProductCtrl = require('./controller')

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => {
    console.log('Listening on port:', SERVER_PORT)
  })
}).catch(err => {
  console.log('err:', err)
})

app.get('/api/products', ProductCtrl.getAll);
app.get('/api/products/:id', ProductCtrl.getOne);
app.put('/api/products/:id', ProductCtrl.update)
app.post('/api/products', ProductCtrl.create);
app.delete('/api/products/:id', ProductCtrl.delete);