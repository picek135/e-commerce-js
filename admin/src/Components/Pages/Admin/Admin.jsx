import React from 'react'
import './Admin.scss'
import Sidebar from '../../Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../AddProduct/AddProduct'
import ListProduct from '../../ListProduct/ListProduct'

function Admin() {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>} />
            <Route path='/listproduct' element={<ListProduct/>} />
        </Routes>
    </div>
  )
}

export default Admin