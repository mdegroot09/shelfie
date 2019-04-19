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
    let {name, price, img} = req.body
    db.update_product([id, name, price, img]).then(response => {
      res.send(response)
    }).catch(err => {
      console.log('err:', err)
    })
  },
  
  create(req, res){
    const db = req.app.get('db')
    // console.log('req.body:', req.body)
    const {name, price, imgurl} = req.body
    db.create_product([name, price, imgurl]).then(response => {
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