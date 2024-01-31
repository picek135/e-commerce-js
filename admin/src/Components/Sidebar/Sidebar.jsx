import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <ShoppingCartIcon />
                <p>Add product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <InventoryIcon />
                <p>Product list</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar