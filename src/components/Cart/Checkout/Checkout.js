import React from 'react'; 
import classes from './Checkout.module.scss';


const Checkout = props => {

    return (
        <div>
            <div className={classes.Shipping}>
                <div className={classes.Shipping_address}>
                 Shipping address 
                      Create new Shipping address  - input field shows up
                      Use previous Shipping address / when selected  - list shows up 
                </div>
                <div className={classes.Shipping_email}>
                     email adress: 
                </div>
            </div>

            <div className={classes.Payment}>
                <form>

               
                Name<input></input>
              
                </form>
            </div>
        </div>
    )
}

export default Checkout;