import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <span>Plekson</span>
        <div className='links'>
            <a href=''><img src='github.png' alt='github'/></a>
            <a href=''><img src='linkedin.png' alt='linkedin'/></a>
        </div>
    </div>
  )
}

export default Navbar