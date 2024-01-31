import React, {useContext} from 'react'
import './ProductDisplay.scss'
import StarIcon from '@mui/icons-material/Star';
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
        <div className="left">
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <img className='mainImg' src={product.image} alt="" />
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className="star">
                <StarIcon className='icon'/>
                <StarIcon className='icon'/>
                <StarIcon className='icon'/>
                <StarIcon className='icon'/>
                <StarIcon className='icon-dull'/>
                <p>(138)</p>   
            </div>
            <div className="prices">
                <div className="price-old">${product.old_price}</div>
                <div className="price-new">${product.new_price}</div>
            </div>
            <div className="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="size">
                <h1>Select Size</h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="category"><span>Category :</span>Women, Hoodie, Sweater</p>
            <p className="category"><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay