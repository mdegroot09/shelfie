import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

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
        console.log(this.state)
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
            />
          </div>
          <div className='column2'>
            <Form/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
