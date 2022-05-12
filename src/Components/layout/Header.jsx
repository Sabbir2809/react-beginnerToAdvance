import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
        <div className="header_right">
          <a href="https://mail.google.com/">Gmail</a>
          <a href="https://www.google.com.bd/imghp?hl=en&authuser=0&ogbl">Image</a>
          <span className="material-icons header_apps"> apps </span>
          <span className="material-icons"> account_circle </span>
        </div>
    </div>
  )
}

export default Header