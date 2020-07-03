import React from 'react'
import classes from './Navigation.module.scss'

import {connect} from 'react-redux'
import Button from '../UI/Button/Button';
import NavigationItems from './NavigationItems/NavigationItems'
const Navigation = (props) => {
  
    //useState save showCarprev,
    //change show depending on state
    let cart = props.cart.length === 0 ? "Cart" : `Cart (${props.cart.length})`

    if(props.cartLoading){
        cart = "Loading cart..."
    }
      return (
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuth={props.isAuth}></NavigationItems>
          
            <Button clicked={props.clicked} btnType="cart">{cart}</Button>
        </nav>
      )

}


const mapStateToProps = state => {
    return {
        cart:state.clothes.cart,
        cartLoading:state.clothes.cartLoading
        // isAuth:state.auth.isAuth,
      
    }
}

export default connect(mapStateToProps,null)(Navigation); 