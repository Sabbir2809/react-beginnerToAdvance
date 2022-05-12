import React from 'react'
import Button from '../Button/Button'
import Search from '../Search/Search'
import './Home.css'

function Home({des}) {
  // console.log(props.des);
  return (
    <div className="mainBody">

      <img src="./Images/google_logo.png" alt="Google.com" />
      <Search />
      <Button />
      <p className='language'>{des}</p>
      
    </div>
  )
}

export default Home