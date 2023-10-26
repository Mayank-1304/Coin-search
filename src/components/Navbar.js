import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <Link to='/'>
      <div className='navbar'>
        <h1>Coins<span className='purple'>Search</span></h1>
      </div>
      </Link>
    </>
  )
}

export default Navbar
