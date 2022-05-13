import React from 'react'
import './Footer.css'

function Footer({about, privacy, terms, settings}) {
  return (
    <footer>
      <nav id="footer_nav">
        <ul id="footer_left">
          <a href="#1">{about}</a>
          <a href="#2">Advertising</a>
          <a href="#3">Business</a>
          <a href="#4">How Search Works</a>
        </ul>
        <ul id="footer_right">
          <a href="#1">{privacy}</a>
          <a href="#2">{terms}</a>
          <a href="#3">{settings}</a>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer