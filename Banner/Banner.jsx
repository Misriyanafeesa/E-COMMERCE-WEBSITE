  import React from 'react'
  import '../Banner/Banner.css'
  import Banner_img from '../Asssets/Banner_img.png'
  const Banner = () => {
    return (
      <>
      <div className='banner'>
        <div className='banner-left'>
          <h1>Elegance Illuminated: <span>AuroraAttire</span> Your Radiant Style Destination</h1>
          <p>Elevate your wardrobe with <span>AuroraAttire</span> – where timeless elegance meets modern style. Discover curated collections for a radiant and refined fashion experience.</p>
          <button className='shop-now'>Shop now</button>
        </div>
        <div className='banner-right'>
          <img src={Banner_img} alt="" />
        </div>

      </div>    
      </>
    )
  }
  
  export default Banner