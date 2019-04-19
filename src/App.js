import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'
// import router from './router'

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }

  componentWillMount = () => {
    axios.get('/api/products').then(res => {
      this.setState({products: res.data})
      setTimeout(() => {
        console.log('this.state:', this.state)
      }, 1);
    }).catch(err => {
      console.log('err:', err)
    })
  }

  addToInventory = (product) => {
    axios.post('/api/products', product).then(res => {
      this.setState({products: res.data})
      window.location.reload()
      setTimeout(() => {
        console.log('this.state:', this.state)
      }, 1);
    }).catch(err => {
      console.log('err:', err)
    })
  }

  updateProduct = (product) => {
    axios.put(`/api/products/${product.id}`, product).then(res => {
      this.setState({products: res.data})
      setTimeout(() => {
        console.log('this.state:', this.state)
      }, 1);
    }).catch(err => {
      console.log('err:', err)
    })
  }

  deleteProduct = (product) => {
    axios.delete(`/api/products/${product.id}`).then(res => {
      this.setState({products: res.data})
      window.location.reload()
      setTimeout(() => {
        console.log('this.state:', this.state)
      }, 1);
    }).catch(err => {
      console.log('err:', err)
    })
  }

  render() {
    let {products} = this.state
    return (
      <div className="App">
        <Header/>
        <div className='columns'>
          <div className='column1'>
            <Dashboard
              products={products}
              deleteProduct={this.deleteProduct}
            />
          </div>
          <div className='column2'>
            <Form
              addToInventory={this.addToInventory}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
