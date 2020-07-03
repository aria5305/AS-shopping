import React from 'react'
import classes from "./Button.module.scss";

const button = props => {
    

   return (
        <button disabled={props.disable} className={[classes.btn, classes[props.btnType]].join(' ')}   onClick={props.clicked}>
            {props.children}
        </button>
   )
 
   }
export default button;