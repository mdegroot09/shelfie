module.exports = {
  getAll(req, res){
    const db = req.app.get('db')
    db.get_products().then(response => {
      res.send(response)
    }).catch(err => {
      console.log('err:', err)
    })
  },
  
  update(req, res){
    const db = req.app.get('db')
    const id = req.params.id
    const desc = req.query.desc
    db.update_product([id, desc]).then(response => {
      res.send(response)
    }).catch(err => {
      console.log('err:', err)
    })
  },
  
  create(req, res){
    const db = req.app.get('db')
    console.log('req.body:', req.body)
    const {name, price, image_url} = req.body
    const desc = req.body.description
    db.create_product([name, desc, price, image_url]).then(response => {
      res.send(response)
    }).catch(err => {
      console.log('err:', err)
    })
  },

  delete(req, res){
    const db = req.app.get('db')
    const id = req.params.id
    db.delete_product([id]).then(response => {
      res.send(response)
    }).catch(err => {
      console.log('err:', err)
    })
  }
}