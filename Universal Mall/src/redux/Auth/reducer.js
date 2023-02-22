import { GET_ADMINS_DATA_SUCCESS,GET_USERS_DATA_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes";

const inititalState = {isLoading:false,isAuth: false,token:'',isError: false,users:[],admins:[]}
export const reducer =(state=inititalState,{type,payload})=>{
    switch(type){
        case GET_USERS_DATA_SUCCESS: return {...state,users:payload};
        case GET_ADMINS_DATA_SUCCESS: return {...state,admins:payload};
        case LOGIN_REQUEST: return {...state,isLoading:true};
        case LOGIN_SUCCESS: return {...state,isLoading:false,isAuth:true,token:payload};
        case LOGIN_FAILURE: return {...state,isLoading:false,isError:true};
        default: return state;
    }
}