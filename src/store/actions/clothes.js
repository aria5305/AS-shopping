import * as actionTypes from './actionTypes';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"

const fetchStart = () => {
    return {
        type:actionTypes.FETCH_DATA_START,
    };
}

const fetchFailed = (error) => {
    return {
        type:actionTypes.FETCH_DATA_FAILED,
        error:error,
    }
}

const postStart = () => {
    return {
        type:actionTypes.POST_START,
    }
}

const postSuccess = () => {
    return {
        type:actionTypes.POST_SUCCESS,
    }
}

const postFailed = (error) => {
    return {
        type:actionTypes.POST_FAILED,
        error:error
    }   
}

export const clearCart = () => {
    return {
        type:actionTypes.CLEAR_CART,
    }
}

const fetchSuccess  = (items) => {
    
        return {
            type:actionTypes.FETCH_DATA_SUCCESS,
            items:items
         
        };
}

const add = (cart) => {      
         return {
            type:actionTypes.ADD_TO_CART,
            cart:cart
          }

 
}
export const addToCart = (cart,item, id) => {
        return dispatch=> {

            let newCart = []
            if(cart.length !== 0){
                newCart = [...cart];
            
                const inArray = newCart.find(el=> el.itemName === item.itemName && el.size === item.size); 
                if(inArray){
                     let index = newCart.indexOf(inArray); 
                     newCart[index].quantity++
                       
                }else{
                    newCart.push({...item, "quantity": 1})
                }
                       
            }else{
                newCart.push({...item, "quantity":1})
            }

            console.log(newCart);

            dispatch(add(newCart))
            dispatch(postCartToDB(id,newCart))


        }

 
}

const updateNum = (cart) => {
    return {
        type:actionTypes.UPDATE_QUANTITY,
        cart:cart
    }
}

export const updateQuantity = (cart,item,num,id) => {
    
    return dispatch => {
          // needs to post Data to DB as well to save Cart content 
    let newItem = {...item, 'quantity':num}
    console.log(newItem)
    let newCart = [...cart]

   
        let index = newCart.indexOf(item); 
        newCart.splice(index,1,newItem);

        dispatch(updateNum(newCart));
        dispatch(postCartToDB(id,newCart));

        
    
    }
   
}
export const removeFromCart = (cart,item) => {

          // needs to post Data to DB as well to save Cart content 
    let  newCart = [...cart];
    
    const inArray = newCart.find(el=> el.itemName === item.itemName); 
    if(inArray){
        let index = newCart.indexOf(inArray); 
        if(newCart[index].quantity == 1){
            newCart.splice(index,1);

        }else{  
             newCart[index].quantity--

        }
    }
}


export const sizeSelected = (size,item) => {

    return {
        type:actionTypes.SIZE_SELECTED,
        itemSelected:{...item,'size':size}
    }
}


const fetchCartStart = () => {
    return {
        type:actionTypes.FETCH_CART_START
    }
}

const fetchCartSuccess = (cart) => {
    return {
        type:actionTypes.FETCH_CART_SUCCESS,
        cart:cart

    }
}

const fetchCartFailed = (error) => {

    return {
        type:actionTypes.FETCH_CART_FAILED,
        error:error
    }
}

const postCartToDB = (id,cart) => {

        return dispatch => {
            dispatch(postStart())
            var newPostKey = firebase.database().ref().child('users').push().key;
    
            let updates = {} 
                
              
            updates['/users/' + id + '/cart'] = cart
            
    
            firebase.database().ref().update(updates).then( () => {
                    dispatch(postSuccess())
                })
                .catch(error => {
                    console.log(error)
                    dispatch(postFailed(error))
                })
            }
        
      
}


export const fetching = () => {
    return dispatch => {
        dispatch(fetchStart());
    fetch('https://react-myshopapp.firebaseio.com/items.json')
        .then(response => response.json())
        .then(responseData => {
            dispatch(fetchSuccess(responseData)) 
        }).catch(error => {
            dispatch(fetchFailed(error))
        })
    }
}


export const fetchingUserCart = (localId) => {

    return dispatch => {
        dispatch(fetchCartStart()); 
          firebase.database().ref('/users/' + localId + '/cart').once('value').then(snapshot=> {
         
            let ca = snapshot.val();
            console.log(ca);
                 if(ca !== null){
                   
                        dispatch(fetchCartSuccess(ca));
                 }else{
                    let cart = [] 
                      dispatch(fetchCartSuccess(cart))
                 }
            }).catch(error => 
                dispatch(fetchCartFailed(error)))
    }
}