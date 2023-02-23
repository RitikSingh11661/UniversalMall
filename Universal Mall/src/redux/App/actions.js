import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actiontypes";
import axios from "axios";

const getProductsRequest=()=>({type:GET_PRODUCTS_REQUEST});
const getProductsSuccess=(payload)=>({type:GET_PRODUCTS_SUCCESS,payload});
const getProductstFailure=()=>({type:GET_PRODUCTS_FAILURE});



export const getProduct = (param) => (dispatch) =>{
      dispatch(getProductsRequest());
      axios.get("https://universal-mall-api.onrender.com/products",param).then((res)=>{
           console.log(res.data)
          dispatch(getProductsSuccess(res.data))
      }).catch((err)=>{
          dispatch(getProductstFailure());
      })
  }