import React, { useState, useEffect} from 'react'
import './ListProduct.scss'
import CloseIcon from '@mui/icons-material/Close';

function ListProduct() {

  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo = async () =>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="all-products">
        <hr />
        {allproducts.map((product,index)=>{
          return <><div key={index} className="format-main format">
            <img src={product.image} alt="" className="product-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <CloseIcon onClick={()=>(remove_product(product.id))} className='remove-icon'/>
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct