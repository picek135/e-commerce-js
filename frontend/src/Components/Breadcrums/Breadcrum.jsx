import React from 'react'
import './Breadcrum.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Breadcrum(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <ArrowForwardIosIcon/> SHOP <ArrowForwardIosIcon/> {product.category} <ArrowForwardIosIcon/> {product.name}
    </div>
  )
}

export default Breadcrum