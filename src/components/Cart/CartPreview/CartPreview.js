import React,{useState} from 'react'
import classes from './CartPreview.module.scss'
import {connect} from 'react-redux'
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/input'
import { NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartReview = props => {
    
    const [quantityState,setQuantityState] = useState({
        elementType:'input',
        elementConfig:{
            type:'number',
       
        },  
        validation:{
            required:true,
            minLength:1
        },
        id:'quantity',
        value:1,
    })


    const purchaseHandler = () => {
        // if(props.isAuth){ 
        //     // this.setState({purchasing:true})
        // }else{
        //     props.onSetAuthRedirectPath('/checkout');
        //     props.history.push('/auth');
        // }
    }
    const purchaseContinueHandler =() => {
        // props.onInitPurchase(); //making sure that we don't redirect again when we try to purchase burger again
        // props.history.push('/checkout');
        
    }

  
    let cart  = props.cart.map(item => {
        console.log(item);
       return  (
       <li key={item.itemName+item.size} className={classes.cartPrev_item}>
         <div className={classes.cartPrev_img} style={{backgroundImage:`url(${item.img})`}}> </div>
            <div className={classes.cartPrev_delete} onClick={() => props.onRemoveFromCart(props.cart,item)}>
                <FontAwesomeIcon className={classes.fontAwesome}icon="trash"/>
            </div>
        <div className={classes.cartPrev_item__right}>
            <p className={classes.cartPrev_heading}>{item.itemName}  - {item.size}</p> 
           <div className={classes.cartPrev_wrapper}>
                <p className={classes.cartPrev_subHeading}>{item.price} * </p>
                <Input key={item+item.size} changed={event => {
                    props.onUpdateQuantity(props.cart,item,event.target.value)
                setQuantityState({...quantityState,value:event.target.value});
                }} value={item.quantity} class="cartPrev"/>
            </div>
        </div>
        
        </li>
       )
    })

    return (
        <div className={classes.Container}>
                <h3>Cart Preview</h3>

                <ul className={classes.cartList}>
                        {cart}
                 <Button btnType="checkout" clicked={props.clicked}><NavLink to='/cart' className={classes.link}>Checkout</NavLink></Button>
                </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart:state.clothes.cart,
        isAuth:state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
     
       onRemoveFromCart:(cart,item) => dispatch(actions.removeFromCart(cart,item)),
       onUpdateQuantity:(cart,item,num) => dispatch(actions.updateQuantity(cart,item,num))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartReview)