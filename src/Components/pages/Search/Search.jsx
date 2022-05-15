import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className="input_container">
      <span className='material-icons'> search </span>
      <input type="search" placeholder='Search' id="" />
      <span className='material-icons'> mic </span>
    </div>
  )
}

export default Search