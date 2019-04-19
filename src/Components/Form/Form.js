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
    let {imgurl} = this.state;
    return (
      <div>
        <div className='preImageDiv'>
          <img className='preImage' src={imgurl} alt=""/>
          {/* <img className='preImage' src="https://i.ibb.co/1JRG158/Untitled-1.png" alt=""/> */}
        </div>
        <div className='inputs'>
          <p className='inputText'>Image URL:</p>
          <input className='urlInput' onChange={(e) => this.handleChange(e.target.value, 'imgurl')} type="text"/>
          <p className='inputText'>Product Name:</p>
          <input className='nameInput' onChange={(e) => this.handleChange(e.target.value, 'name')} type="text"/>
          <p className='inputText'>Price:</p>
          <input className='priceInput' onChange={(e) => this.handleChange(e.target.value, 'price')} type="text"/>
        </div>
        <div className='buttons'>
          <button onClick={() => this.cancelAdd()}>Cancel</button>
          <button onClick={() => this.addToInventory()}>Add to Inventory</button>
        </div>
      </div>
    )
  }
}