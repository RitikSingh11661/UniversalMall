import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actiontypes";
import axios from "axios";

const getProductsRequest=()=>({type:GET_PRODUCTS_REQUEST});
const getProductsSuccess=(payload)=>({type:GET_PRODUCTS_SUCCESS,payload});
const getProductstFailure=()=>({type:GET_PRODUCTS_FAILURE});


export const getProducts=(dispatch)=>{
      dispatch(getProductsRequest());
      axios.get('/api/products').then(res=>getProductsSuccess(res.data))
      .catch(()=>getProductstFailure())
}