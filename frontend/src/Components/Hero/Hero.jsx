import React from 'react'
import './Hero.scss'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import hero_image from '../Assets/hero.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
            <p>collections</p>
            <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <ArrowForwardOutlinedIcon className='arrow-icon'/>

            </div>
        </div>

        <div className="hero-right">
            <img src={hero_image} alt="." />
        </div>

    </div>

  )
}

export default Hero