module.exports = {
  getAll(req, res){
    const db = req.app.get('db')
    db.read_products().then(response => {
      res.send(response)
    }).catch(err => {
      console.log('err:', err)
    })
  }
}