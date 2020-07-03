import React from 'react'
import classes from './Cart.module.scss';
import {connect} from 'react-redux'; 
import Checkout from './Checkout/Checkout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { NavLink } from 'react-router-dom';

const Cart = props => {

    let list = 'Cart is empty'

    if(props.cart.length > 0){

   
       list =  props.cart.map(item => {
       
            return  (
                <li key={item.itemName} className={classes.Cart_item}>
                <div className={classes.Cart_img} style={{backgroundImage:`url(${item.img})`}}> </div>
                   <div className={classes.Cart_delete} onClick={() => props.onRemoveFromCart(props.cart,item)}>
                       <FontAwesomeIcon className={classes.fontAwesome}icon="trash"/>
                   </div>
               <div className={classes.Cart_item__right}>
                   <p className={classes.Cart_heading}>{item.itemName}  - {item.size}</p> 
                  <div className={classes.Cart_wrapper}>
                       <p className={classes.Cart_subHeading}>{item.price} * {item.quantity}</p>
                       <p className={classes.Cart_price}>Total: {parseInt(item.quantity * item.price).toFixed(2)} </p>
                      
                   </div>
               </div>
               
               </li>
            )
         })
    }

    

    return (
        <div className={classes.Container}>
            <div className={classes.leftContainer}>
            <Checkout/>
            </div>
               <div className={classes.rightContainer}>
                   <ul> 
                       <h3 className={classes.rightContainer_header}>List of items in Cart</h3>
                       {list}
                      
                   </ul>
               </div>
             
              
        </div>
    )
}


const mapStateToProps = state => {
    return {
        cart:state.clothes.cart
    }
}
export default connect(mapStateToProps,null)(Cart)