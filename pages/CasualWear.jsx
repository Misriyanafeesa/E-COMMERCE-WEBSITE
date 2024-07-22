import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Casual_img from '../Components/Asssets/Casual_img.png'
import './CSS/CasualWear.css'
import casual_wear from '../Components/Asssets/casual_wear'
import Item from '../Components/Item/Item'
import Newsletter from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

function CasualWear() {
  return (
    <>
    <Navbar/>
    <div className='casualwear'>
    <div className='casualwear-left'>
      <h1>10-20% OFF</h1>
      <p> Unwrap the festivities in style with <span>AuroraAttire's</span> premium collections</p>
      <button className='shop-now'>Shop now</button>
    </div>
    <div className='casualwear-right'>
      <img src={Casual_img} alt="" />
    </div>
    </div>
    <div className="new-collections">
        <h1>New Collections</h1>
        <div className="collections">
            {casual_wear.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default CasualWear