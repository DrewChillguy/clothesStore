import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'


const Navbar = () => {
    const[select,setSelect] = useState(null);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li className='nav-link'
          onClick={() => {
            setSelect("shop");
          }}
        >
          <Link to='/'>Shop</Link>
          {select === "shop" ? <hr /> : ""}
        </li>
        <li className='nav-link'
          onClick={() => {
            setSelect("men");
          }}
        >
          <Link to='/mens'>Men</Link>
          {select === "men" ? <hr /> : ""}
        </li>
        <li className='nav-link'
          onClick={() => {
            setSelect("women");
          }}
        >
          <Link to='/womens'>Women</Link>
          {select === "women" ? <hr /> : ""}
        </li>
        <li className='nav-link'
          onClick={() => {
            setSelect("kids");
          }}
        >
          <Link to='/kids'>kids</Link>
          {select === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="items">
        <div className="login">
          <Link to='/login'><button className="login-btn">Log in</button></Link>
          <div className="cart">
            <Link to='/cart'><img src={cart} /></Link>
            <p className="quantity">0</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar