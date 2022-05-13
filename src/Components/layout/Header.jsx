import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <ul className='header_nav'>
          <a href="#1">Gmail</a>
          <a href="#2">Images</a>
          <span className='material-icons'> apps </span>
          <span className='material-icons'> account_circle </span>
        </ul>
      </nav>
    </header>
  )
}

export default Header