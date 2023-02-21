import React from 'react'
import { useSelector } from 'react-redux'

export const HomePage = () => {
  const store=useSelector(store=>store);
  console.log(store)
  return (
    <div>HomePage</div>
  )
}
