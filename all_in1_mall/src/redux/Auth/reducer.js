import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes";

const inititalState = {isLoading:false,isAuth: false,token:'',isError: false,}
export const reducer =(state=inititalState,{type,paylod})=>{
    switch(type){
        case LOGIN_REQUEST: return {...state,isLoading:true};
        case LOGIN_SUCCESS: return {...state,isLoading:false,isAuth:true,token:paylod};
        case LOGIN_FAILURE: return {...state,isLoading:false,isError:true};
        default: return state;
    }
}