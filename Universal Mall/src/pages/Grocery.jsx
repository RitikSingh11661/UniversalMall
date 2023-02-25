import React from 'react'
import style from '../Style/Grocery.module.css'

function Grocery() {
  return (
    <div>
    <div id={style.grocery}>
        <p>Grocery & Home Furnishing</p>
    </div>
    <div id={style.Furnishing}>

        <div>
            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/498479/1613247367528.png?imwidth=414&impolicy=hq"/>
            <p>Big Bazar</p>
        </div>
        <div>
            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/498482/1620737072141.png?imwidth=414&impolicy=hq"/>
            <p> Urban Leader</p>
        </div>
        <div>
        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/498480/1620737097910.jpg?imwidth=414&impolicy=hq    "/>
        <p>@home</p>
        </div>
       < div>
       <img src="https://assetscdn1.paytm.com/images/catalog/view_item/498484/1610566898069.jpg?imwidth=414&impolicy=hq"/><p>More</p></div>
        
    </div>
    </div>
  )
}

export default Grocery