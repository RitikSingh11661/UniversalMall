import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  // const store=useSelector(store=>store);
  // console.log(store)
  const [userDetails, setUserDetails] = useState({})
  const navigate=useNavigate();
  useEffect(() => {
    const getData= account.get()
    getData.then(
      (res)=>{
         setUserDetails(res)
      },
      (err)=>(console.log(err))
    )
  }, [])

  const handleLogout=async()=>{
    try {
       await account.deleteSession('current')
       navigate('/')
    } catch (error) {
      console.log('error',error)
    }
  }

  return (
    <div>HomePage</div>
  )
}
