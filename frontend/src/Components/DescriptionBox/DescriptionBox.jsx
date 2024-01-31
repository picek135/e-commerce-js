import React from 'react'
import './DescriptionBox.scss'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="navigator">
            <div className="nav-box">Description</div>
            <div className="nav-box fade">Reviews (138)</div>
        </div>
        <div className="description">
            <p>An e-commerce website is one that allows people to buy and sell physical goods,
                services, and digital products over the internet rather than at a brick-and-mortar location.
                Through an e-commerce website, a business can process orders, accept payments,
                manage shipping and logistics, and provide customer service.</p>
            <p>E-commerce websites display products or services along with detailed desciptions,
                images, prices and avaible variations as sizes, colors, etc.
                Each product has its own dedicated page with relevant information. 
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox