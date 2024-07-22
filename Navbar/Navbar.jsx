import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


import logo from '../Asssets/Logo1.png'
import cart_icon from '../Asssets/Cart_icon.png'

const Navbar = () => {

  
  return (
    <div className="navbar">
    <div>
      <img src={logo} alt="" className="nav-logo"/>
    </div>
    <ul className="nav-menu">
      <Link className='nav-link' to='/'><li>Shop</li></Link>
      <Link className='nav-link' to='/partywear'><li>Party Wear</li></Link>
      <Link className='nav-link' to='/casualwear'><li>Casual Wear</li></Link>
      <Link className='nav-link' to='/kids'><li>Kids</li></Link>
    </ul>
    <div className="nav-cart">
      <Link to='/signup'><button>Login</button></Link>
      <img src={cart_icon} alt="" />
      <div className="nav-cart-count">0</div>
    </div>
  </div>
  )
}

export default Navbar