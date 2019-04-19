import React, {Component} from 'react'

export default class Header extends Component{
  render() {
    return (
      <div className='appHeader'>
        <div className='appLogo'>
          <img className='shelfieLogo' src="https://i.ibb.co/vwFTBhR/logo.png" alt="shelfie logo"/>
          <p>SHELFIE</p>
        </div>
      </div>
    )
  }
}