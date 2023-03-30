import React, { useEffect } from 'react'
import './header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchBar from './searchBar/SearchBar'
import logo from '../../images/logo4.png'
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
const Header = () => {
  useEffect(() => {
    document.body.addEventListener('scroll', () => {
      console.log("hello");
    })
  });
  return (
    <>
      <div className='header'>
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <div className="centerDiv">
          <SearchBar />
        </div>
        <div className="rightDiv">
          <ShoppingCartOutlinedIcon />
          <Avatar alt="Remy Sharp" src="" />
        </div>
      </div>
      <div className="linkHeaderMain">
        <div className='linksHeader'>
          <div>
            <NavLink to='/fashion' >Fashion</NavLink>
          </div>
          <div>
            <NavLink to='/mobiles' >Mobiles</NavLink>
          </div>
          <div>
            <NavLink to='/electronics' >Electronics</NavLink>
          </div>
          <div>
            <NavLink to='/furniture' >Furniture</NavLink>
          </div>
          <div>
            <NavLink to='/appliances' >Appliances</NavLink>
          </div>
          <div>
            <NavLink to='/grocery' >Grocery</NavLink>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header