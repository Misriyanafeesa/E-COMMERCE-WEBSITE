import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './CSS/PartyWear.css'
import Party_img from '../Components/Asssets/Party_img.png'
import party_wear from '../Components/Asssets/party_wear'
import Item from '../Components/Item/Item'
import Newsletter from '../Components/Newsletter/Newsletter'

function PartyWear() {
  return (
    <>
    <Navbar/>
    <div className='partywear'>
    <div className='partywear-left'>
      <img src={Party_img} alt="" />
    </div>
    <div className='partywear-right'>
      <h1>Flat 20% Offer Sale</h1>
      <p> Enjoy exclusive partywear offers that will make you the star of any event</p>
      <button className='shop-now'>Shop now</button>
    </div>
    </div>
    <div className="new-collections">
        <h1>New Collections</h1>
        <div className="collections">
            {party_wear.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default PartyWear