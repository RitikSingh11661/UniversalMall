import React from 'react'
import style from "../Style/Navbar.module.css"
import image from "../Images/list.png"
import pic from "../Images/cartbag.png"
function Navbar() {
  return (
    <div>
        <div id={style.imgr}>
        <img src="https://www.fintechfutures.com/files/2022/05/paytmmall-logo.jpg"/>
        </div>
        <div id={style.nav}>
        <div>
        <input type="text" placeholder="Search for Product for Brands or Category" />
        </div>
        <div>
          <img id={style.ime} src={image}/>
          <p>My Order</p>
        </div>
        <div>
        <img id={style.ime} src={pic}/>
          <p>No Item</p>
        </div>
        <div>
        <img id={style.ime} src="https://www.clipartmax.com/png/middle/93-932733_registration-user-red-icon.png"/>
          <p>LogIn/Sign Up</p>
        </div>
        


        </div>
    </div>
  )
}

export default Navbar