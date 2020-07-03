import React from 'react';
import website_logo from '../../assets/images/Logo.png'; 
import classes from './Logo.module.scss';


const logo =(props) => (
    <div className={classes.Logo}>     
        <img src={website_logo} alt="Company logo" onClick={props.click}/>
    </div>
)

export default logo;