import React, {Component} from 'react'

export default class Form extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      price: 0,
      imgurl: ''
    }
  }

  handleChange = (val, type) => {
    this.setState({[type]: val})
  }

  cancelAdd(){
    document.getElementsByClassName('urlInput')[0].value = ''
    this.setState({name: ''})
    document.getElementsByClassName('priceInput')[0].value = ''
    this.setState({price: 0})
    document.getElementsByClassName('nameInput')[0].value = ''
    this.setState({imgurl: ''})
  }

  addToInventory = () => {
    
  }

  render() {
    return (
      <div>
        <p>Image URL:</p>
        <input className='urlInput' onChange={(e) => this.handleChange(e.target.value, 'imgurl')} type="text"/>
        <p>Product Name:</p>
        <input className='nameInput' onChange={(e) => this.handleChange(e.target.value, 'name')} type="text"/>
        <p>Price:</p>
        <input className='priceInput' onChange={(e) => this.handleChange(e.target.value, 'price')} type="text"/>
        <div>
          <button onClick={() => this.cancelAdd()}>Cancel</button>
          <button onClick={() => this.addToInventory()}>Add to Inventory</button>
        </div>
      </div>
    )
  }
}