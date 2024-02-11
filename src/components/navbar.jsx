import React from 'react'
import {Link} from 'react-router-dom'
//phosphor package react for icons
import {ShoppingCart} from 'phosphor-react'
import "./navbar.css";

export const Navbar = () => {
  return (
      <div>
        <h2>The Super Mobile Shop </h2>
      <div className='navbar'>
        <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/account">Account</Link>
            <Link to="/cart">
                <ShoppingCart size={32}></ShoppingCart>
            </Link>
        </div>
    </div>
    </div>
  )
}