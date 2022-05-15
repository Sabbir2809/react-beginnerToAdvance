import React from 'react'
import Button from '../Button/Button'
import Search from '../Search/Search'
import './Home.css'

function Home({description, lang}) {
  return (
    <section>
      <img src="./Images/google_logo.png" alt="" />
      <Search />
      <Button />
      <p>{description} {lang}</p>
    </section>
  )
}

export default Home