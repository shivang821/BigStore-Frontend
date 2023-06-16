import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css'
import { NavLink } from 'react-router-dom';
const SearchBar = () => {
  const [keyword,setKeyWord]=useState()
  return (
    <div className='searchBar'>
      <div className="searchBarLeft">
        <input type="text" name="" onChange={(e)=>setKeyWord(e.target.value)} placeholder='Search' />
      </div>
      <div className="searchBarRight">
        <NavLink to={`/product?keyword=${keyword}`}>
          <SearchIcon />
        </NavLink>
      </div>
    </div>
  )
}

export default SearchBar