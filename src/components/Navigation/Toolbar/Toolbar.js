import React, { useState } from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import Navigation from '../Navigation';
import ToggleSidebar from '../SideBar/ToggleSidebar/ToggleSidebar'
import CartReview from '../../Cart/CartPreview/CartPreview';
import {connect} from 'react-redux';

const Toolbar = (props) => {
    const [showCartprev,setCartPrev] = useState(false);

    return (
    <div className={classes.Toolbar}>
        <ToggleSidebar clicked={props.click} isAuth ={props.isAuth}/>
        <Logo/>
        <a href="/" className={classes.brand}><h1>AS</h1></a>
       
        <Navigation isAuth={props.isAuth} clicked={() => setCartPrev(prev => !prev)}></Navigation>
        {showCartprev ? <CartReview clicked={() => setCartPrev(prev => !prev)} /> : null} 
    </div>
)
}

const mapStateToProps = state => {
    return {
      
        isAuth:state.auth.isAuth,
      
    }
}

// const mapStateToProps = state => {
//     return {
//         cart:state.clothes.cart
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
     
//        onRemoveFromCart:(cart,item) => dispatch(actions.removeFromCart(cart,item)),
//        onUpdateQuantity:(cart,item,num) => dispatch(actions.updateQuantity(cart,item,num))
//     }
// }
export default connect(mapStateToProps,null)(Toolbar);