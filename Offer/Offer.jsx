import React from 'react'
import '../Offer/Offer.css'
import offer_img from '../Asssets/offer_img.png'
const Offer = () => {
  return (
    <>
    <div className='offers'>
        <div className='offers-left'>
            <h1>New Offers: <br /> <span>For You...</span></h1>
            <button className='shop-now'>Shop now</button>
        </div>
        <div className='offers-right'>
            <img src={offer_img} alt="" />
        </div>
    </div>
    </>
  )
}

export default Offer