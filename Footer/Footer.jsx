import React from 'react'
import '../Footer/Footer.css'
import logo_img from '../Asssets/Logo1.png'
import insta_icon from '../Asssets/instagram_icon.png'
import pinterest_icon from '../Asssets/pintester_icon.png'
import whatsapp_icon from '../Asssets/whatsapp_icon.png'
const Footer = () => {
  
  return (
    <>
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo_img} alt="" />
        </div>
        <ul className='footer-links'> 
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
          <div className='footer-icons-container'>
            <img src={insta_icon} alt="" />
          </div>
          <div className='footer-icons-container'>
            <img src={pinterest_icon} alt="" />
          </div>
          <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className='footer-copyright'>
          <hr />
          <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer