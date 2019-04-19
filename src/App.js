import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }



  render() {
    return (
      <div className="App">
        <Header/>
        <div className='columns'>
          <div className='column1'>
            <Dashboard/>
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
