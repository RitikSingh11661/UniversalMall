import React from 'react'
import style from '../Style/Grocery.module.css'

function Jewellery() {
  return (
    <div>
    <div id={style.grocery}>
        <p>Jewellery Brands</p>
    </div>
    <div id={style.Furnishing}>
                
        <div>
            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/711188/1613028659969.png?imwidth=414&impolicy=hq"/>
             <p>Kalyan | Get 20% Cashback</p>    
        </div>
        <div>
            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/711194/1620745874093.jpg?imwidth=414&impolicy=hq"/>
            <p>Jewelfine</p>
        </div>
        <div>
        <img src=" https://assetscdn1.paytm.com/images/catalog/view_item/711199/1613028660058.jpg?imwidth=414&impolicy=hq"/>
        <p>Tanishq</p>
        </div>
       < div>
       <img src="https://assetscdn1.paytm.com/images/catalog/view_item/711200/1620745456365.jpg?imwidth=414&impolicy=hq"/>
       <p>Up to 16% Cashback</p>
       </div>
    </div>
    </div>
  )
}

export default Jewellery