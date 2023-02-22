import axios from "axios"
import { GET_ADMINS_DATA_SUCCESS, GET_USERS_DATA_SUCCESS } from "./actiontypes"

const getAdminsSuccess=(payload)=>({type:GET_ADMINS_DATA_SUCCESS,payload})
const getUsersSuccess=(payload)=>({type:GET_USERS_DATA_SUCCESS,payload})

export const getUsers=(dispatch)=>{
      axios.get('https://universal-mall-api.onrender.com/users').then(res=>dispatch(getUsersSuccess(res.data)))
}

export const getAdmins=(dispatch)=>{
    axios.get('https://universal-mall-api.onrender.com/admins').then(res=>dispatch(getAdminsSuccess(res.data)))
}

export const setLogin=()=>{
      
}

export const signup=()=>{
    
}