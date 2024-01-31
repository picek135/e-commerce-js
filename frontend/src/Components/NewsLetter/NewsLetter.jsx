import React from 'react'
import './NewsLetter.scss'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Special Offers On Your Email</h1>
        <p>Subscribe to newsletter to stay updated</p>
        <div>
            <input type="email" placeholder='yourmail@...' />
            <button>Subscribe</button>
        </div>
    </div>

  )
}

export default NewsLetter