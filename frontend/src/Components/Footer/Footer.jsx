import React from 'react'
import './Footer.scss'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
  return (
    <div className='footer'>
        <div className="logo">
            <ShoppingBasketOutlinedIcon className='icon'/>
            <p>ALLEDROGO</p>
        </div>
        <ul className='links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-icons">
            <div className="container">
                <InstagramIcon/>
            </div>
            <div className="container">
                <FacebookIcon/>
            </div>
            <div className="container">
                <PinterestIcon/>
            </div>
        </div>
        <div className="copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer