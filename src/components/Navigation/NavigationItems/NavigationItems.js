import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const navigationItems = (props) => (

        <ul className={classes.NavigationItems}>
          
            <NavigationItem  link='/shop'>Shop</NavigationItem>

        {(!props.isAuth) ? <NavigationItem close={props.clicked} link='/signup'><p>Sign up</p></NavigationItem> : 
       <NavigationItem link='/logout'>Logout</NavigationItem>}

        {(!props.isAuth) ? <NavigationItem close={props.clicked} link='/login'><p>Login</p></NavigationItem> :null}
      
      
        
            
        </ul>
)

export default navigationItems