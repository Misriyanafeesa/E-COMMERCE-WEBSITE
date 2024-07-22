import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import Footer from '../Components/Footer/Footer'
import Newsletter from '../Components/Newsletter/Newsletter'
function Home() {
  return (
    <>
    
    <Navbar/>
    <Banner/>
    <Popular/>
    <Offer/>
    <NewCollections/>
    <Newsletter/>
    <Footer/>  
    </>
  )
}

export default Home