import React, {useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const store=useSelector(store=>store);
  const [userDetails, setUserDetails] = useState({})
  const navigate=useNavigate();

  return (
    <div>
      <h2>HomePge</h2>
    </div>
  )
}
