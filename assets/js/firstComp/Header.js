import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Marquez Pickett'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return ( <header>
        <div className={'logo'}>Pics'Find A Home</div>

        <nav>
        <a href="#" >create ads</a>
        <a href="#" >About us</a>
        <a href="#" >Log in</a>
        <a href="" className={'register-btn'}>Register</a>
        </nav>
    </header>
            
            )
  }
}


