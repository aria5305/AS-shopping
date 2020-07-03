import React, { Component } from 'react'
import classes from './AuthContainer.module.scss'
import { NavLink } from 'react-router-dom';


const AuthContainer = props => (
<div className={classes.container}>
                
 <div className={classes.container_header}>
                    <ul className={classes.links}>
                        <li><NavLink className={classes.links_item} activeClassName={classes.links_item___active} to="signup">New to AS</NavLink></li>
                        <li><NavLink className={classes.links_item} activeClassName={classes.links_item___active} to="login">Already registered?</NavLink></li>
            </ul>
</div>

{props.children}
</div>

)

export default AuthContainer;