import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../../share/utility';

const initialState = {
    showModal:false, //for the modal to show
    isAuth:false, //checking if user is authenticated. 
    localId: null,
    error:null,
    loading:false,
    token:null,
    email:null,
    authRedirect:'/',
    expirationDate:null,
}

const showModal = (state,action) => {
    return updatedObject(state,{showModal:true})
}

const clear = (state,action )=> {
    return updatedObject(state,{
        localId:null,
        isAuth:false,
        showModal:false,
        token:null,
        email:null,
        expirationDate:null,
    })
}
const hideModal = (state,action) => {
    return updatedObject(state,{showModal:false})
}

const authStart = (state,action) => {
    return updatedObject(state,{error:null,loading:true})
}


const authSuccess = (state,action) => {
    return updatedObject(state,{
        error:null,
        token:action.token,
        isAuth:true,
        loading:false,
        localId:action.localId,
        email:action.email,
       
    })
}

const authFailed =(state,action) => {
    return updatedObject(state,{
        error:action.error,
        loading:false
    })
}

const authLogout = (state,action) => {
    return updatedObject(state,{
        localId:null,
        isAuth:false,
        showModal:false,
        token:null,
        email:null,
        expirationDate:null,
    })
}



const setAuthRedirectPath = (state,action) => {
    return updatedObject(state,{
        authRedirect:action.path
    })
}



const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionTypes.SHOW_MODAL: return showModal(state,action);
        case actionTypes.HIDE_MODAL: return hideModal(state,action);
        case actionTypes.AUTH_START: return authStart(state,action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state,action) 
        case actionTypes.AUTH_FAILED: return authFailed(state,action) 
        case actionTypes.AUTH_LOGOUT: return authLogout(state,action) 
        case actionTypes.SET_AUTH_REDIRECT_PATH : return setAuthRedirectPath(state,action)
        case actionTypes.CLEAR_AUTH_STATE : return clear(state,action)
  
     
    default:return state
    }
}

export default reducer;