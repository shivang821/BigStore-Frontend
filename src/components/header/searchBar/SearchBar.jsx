import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css'
const SearchBar = () => {
  return (
    <div className='searchBar'>
        <div className="searchBarLeft">
            <input type="text" name="" placeholder='Search'/>
        </div>
        <div className="searchBarRight">
            <SearchIcon/>
        </div>
    </div>
  )
}

export default SearchBar