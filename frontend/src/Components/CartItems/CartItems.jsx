import React, { useContext } from 'react'
import './CartItems.scss'
import { ShopContext } from '../../Context/ShopContext'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function CartItems() {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return  <div key={e.id} className="format format-main">
                <img src={e.image} alt="" className='product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <RemoveShoppingCartIcon onClick={()=>{removeFromCart(e.id)}} className='remove-icon'/>
            </div>
            }
            return null;
        })}
        <div className="down">
            <div className="total">
                <h1>cart Totals</h1>
                <div>
                    <div className="total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <div className="total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>CHECKOUT</button>
            </div>
            <div className="promocode">
                <p>If you have promo code, Enter it here</p>
                <div className="promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
        <div>
           
        </div>
    </div>
  )
}

export default CartItems