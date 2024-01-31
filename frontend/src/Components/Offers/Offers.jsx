import React from 'react'
import './Offers.scss'
import hero_img from '../Assets/hero.png'

function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={hero_img} alt="" />
        </div>

    </div>
  )
}

export default Offers