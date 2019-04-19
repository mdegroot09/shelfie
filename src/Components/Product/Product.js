import React, {Component} from 'react'

export default class Product extends Component{

  render() {
    let productColumn = this.props.products.map((product, i) => {
      return (
        <div className='productDiv' key={i}>
          <div className='productDivParent'>
            <div className='productImgDiv'>
              <img className='productImg' src={product.img} alt="product"/>
            </div>
            <div className='dataDiv'>
              <p className='productName'>{product.name}</p>
              <p className='productName'>${product.price}</p>
              <div className='editDeleteBtns'>
                <button >Edit</button>
                <button onClick={() => this.props.deleteProduct(product)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        {productColumn}
      </div>
    )
  }
}