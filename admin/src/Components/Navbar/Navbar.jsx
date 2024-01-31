import React from 'react'
import './Navbar.scss'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import navProfile from '../../assets/avatar1.jpg';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <ShoppingBasketOutlinedIcon className='icon'/>
        <h1>ALLEDROGO</h1>
        <p>Admin Panel</p>
        </div>
        <img src={navProfile} alt="" className='profile'/>

    </div>
  )
}

export default Navbar