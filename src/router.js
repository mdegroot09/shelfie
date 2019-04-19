import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'

export default (
  <div className='columns'>
    <div className='column1'>
      <Switch>
        <Route
          products={this.props.products}
          path='/' 
          component={Dashboard}
        />
      {/* <Dashboard
        products={this.props.products}
        deleteProduct={this.deleteProduct}
        />
        </div>
        <div className='column2'>
        <Form
        addToInventory={this.addToInventory}
      /> */}
      </Switch>
    </div>
  </div>
  // <Switch>
  // <Route exact path='/' component={Dashboard}/>
  // <Route path='/about' component={() => (
  //   <About>
  //     <Switch>
  //       <Route path='/about/story' component={Story}/>
  //       <Route path='/about/faq' component={FAQ}/>
  //     </Switch>
  //   </About>
  // )}/>
  // <Route path='/artists' component={Artists}/>
  // <Route path='/artist/:id' component={Artist}/>
  // </Switch>
)