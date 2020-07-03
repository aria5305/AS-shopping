import * as actionTypes from '../actions/actionTypes'
import {updatedObject} from '../../share/utility';
import * as firebase from "firebase/app";
import "firebase/database"

const initialState = {
    items: [],
    cart:[],
    // cart:[
    //     {
    //             itemName: "Blue Blouse",
    //             price: "50.00",
    //             size: 'S',
    //             quantity:'1',
    //             img: "https://firebasestorage.googleapis.com/v0/b/react-myshopapp.appspot.com/o/ClothesImages%2FblueBlouse.jpg?alt=media&token=2dad2946-4924-4762-ba40-6a7ab37dcb57",
    //             description: "Simple blouse",

    //     }],
    itemSelected:{},
    loading:false,
    showCartPrev:false,
    error:null,
    cartLoading:false,
}

const fetchDataStart = (state,action) => {
    return updatedObject(state,{
        loading:true
    })
}


const fetchDataSuccess = (state,action) => {
    return updatedObject(state, {
        items:action.items,
        loading:false,
      
    })
}

const fetchDataFailed = (state,action) => {
    return updatedObject(state, {
        error:action.error,
        loading:false
    })
}

const addToCart  = (state,action) => {
  
    return updatedObject(state,{
        cart:action.cart
    })

}

const removeOneFromCart = (state,action) => {
    return updatedObject(state,{
        cart:action.cart
    })
}

const removeFromCart = (state,action) => {
    return updatedObject(state,{
        cart:action.cart
    })
}

const updateQuantity = (state,action) => {
    return updatedObject(state,{
        cart:action.cart
    })
}



const sizeSelected = (state,action) => {
    return updatedObject(state,{
        itemSelected:action.itemSelected
    })
}



const showCartPrev = (state,action) => {
    return updatedObject(state,{showCartPrev:true})
}

const hideCartPrev = (state,action) => {
    return updatedObject(state,{showCartPrev:false})
}

const fetchCartStart = (state,action) => {
    return updatedObject(state,{cartLoading:true})
}

const fetchCartSuccess=(state,action) => {
    return updatedObject(state,{cart:action.cart,cartLoading:false})
}

const fetchCartFailed= (state,action) => {
    return updatedObject(state,{error:action.error,cartLoading:false})
}


const clearCart = (state,action) => {
    return updatedObject(state,{cart: []})
}


const reducer = (state = initialState,action) => {

    switch(action.type){
        
        case actionTypes.FETCH_DATA_START: return fetchDataStart(state,action);
        case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state,action);
        case actionTypes.FETCH_DATA_FAILED: return fetchDataFailed(state,action);

        case actionTypes.ADD_TO_CART: return addToCart(state,action);
        case actionTypes.REMOVE_ONE_FROM_CART: return removeOneFromCart(state,action);
        case actionTypes.REMOVE_FROM_CART: return removeFromCart(state,action);
        case actionTypes.UPDATE_QUANTITY: return updateQuantity(state,action);
        
        case actionTypes.SIZE_SELECTED: return sizeSelected(state,action);
        case actionTypes.SHOW_CARTPREV: return showCartPrev(state,action);
        case actionTypes.HIDE_CARTPREV: return hideCartPrev(state,action);
        case actionTypes.CLEAR_CART: return clearCart(state,action);
        case actionTypes.FETCH_CART_START: return fetchCartStart(state,action);
        case actionTypes.FETCH_CART_SUCCESS: return fetchCartSuccess(state,action);
        case actionTypes.FETCH_CART_FAILED: return fetchCartFailed(state,action);


    default:return state
    }
}


export default reducer

