import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import kids from '../Components/Asssets/kids'
import './CSS/Kids.css'
import Item from '../Components/Item/Item'

const Kids = () => {
  return (
    <>
    <Navbar/>
    <div className='kids'>
      <div className='kids-left'>
        <img src={Kids_img} alt="" />
      </div>
      <div className='kids-right'>
        <h1>Top Brands <br /> Min 30% Offer</h1>
        <button className='shop-now'>Shop now</button>
      </div>
    </div>
    <div className="new-collections">
        <h1>New Collections</h1>
        <div className="collections">
            {kids.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Kids