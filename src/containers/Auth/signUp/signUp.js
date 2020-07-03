import React from 'react'; 
import classes from './signUp.module.scss'; 
import Auth from '../Auth';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AuthContainer from '../AuthContainer';


const signup = (props) => {

   
    return (

<AuthContainer>
    <div className={classes.container}>
            <h1 className={classes.container_heading}>
                   Sign up with...
            </h1>
            <div className={classes.signup}>
                <div className={classes.signup_Inner}>
                    <FontAwesomeIcon className={classes.fontAwesome} icon={["fab", "twitter"]}/>
                    <p>Coming soon...</p>
                </div>
                
               
                <div className={classes.signup_Inner}>
                    
                    <FontAwesomeIcon className={classes.fontAwesome} icon={["fab", "facebook"]}/>
                    <p>Coming soon...</p>
                </div>
                <div className={classes.signup_Inner}>
                    <FontAwesomeIcon className={classes.fontAwesome} icon={["fab", "google"]}/>
                    <p>Sign up with Google</p>
                </div>
             

            </div>
          
        </div>


        <div className={classes.container_body}>
        <h1 className={classes.container_heading}>
                   Creating an account with us
            </h1>
        <Auth btnText="Sign up" signup={true}/>
    
        </div>

        
            
      

            

     
          </AuthContainer>
    )
}

export default signup;