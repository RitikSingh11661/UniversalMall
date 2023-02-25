import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product';

export const HomePage = () => {
  // const store=useSelector(store=>store);
  // console.log(store)
  return (
    <div>
      <Product></Product>
    </div>
  )
}
