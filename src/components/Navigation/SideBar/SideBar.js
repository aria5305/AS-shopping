import React from 'react';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideBar.module.scss';
import Aux from '../../../hoc/Auxillary'

const sideDrawer = (props) => {

   let attachedClasses = [classes.SideBar, classes.Closed];

   if(props.show) {
       attachedClasses = [classes.SideBar, classes.Open];
   }

    return (
    <Aux>
        <BackDrop show={props.show} clicked={props.closed}/>
        
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            
            <nav>
                <NavigationItems isAuth={props.isAuth}/>
            </nav>

        </div>
    </Aux>


    )
  

}


export default sideDrawer;