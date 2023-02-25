import React from 'react'
import Brand from './Brand'
import Footer from './Footer'
import Grocery from './Grocery'
import Jewellery from './Jewellery'
import Navbar from './Navbar'


function HomePage() {
  return (
    <div>
      <Navbar/>
      <Brand/>
      <Grocery/>
      <Jewellery/>
      <Footer/>
    </div>
  )
}

export default HomePage