import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component{
  render() {
    return (
      <div>
        <Product
          products={this.props.products}
          deleteProduct={this.props.deleteProduct}
        />
      </div>
    )
  }
}