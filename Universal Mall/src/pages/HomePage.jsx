import React from 'react'
import { useSelector } from 'react-redux'

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