import React, { Component } from 'react'
import classes from './Login.module.scss';
import Auth from '../Auth';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import AuthContainer from '../AuthContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import Spinner from '../../../Components/UI/spinner/spinner';


//look at Auth page from hamburger builder


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
           controls:{
            email: {
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your email address'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false,
            },
            password: {
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false,
            },
           },
          }
    }


    signInHandler = (event) => {
        event.preventDefault(); 
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value);
        // this.props.onSetAuthRedirectPath();
    }

    
    render(){
     
   
        return (     
            
            <AuthContainer>

<div className={classes.container}>
            <h1 className={classes.container_heading}>
                  Login with...
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
                <div className={classes.signup_Inner} onClick={() => this.props.onGoogleAuth()}>
                    <FontAwesomeIcon className={classes.fontAwesome} icon={["fab", "google"]}/>
                    <p>Login with Google</p>
                </div>
             

            </div>
          
        </div>


        <div className={classes.container_body}>
        <h1 className={classes.container_heading}>
                   Login with the account you've created
            </h1>
        <Auth btnText="Login" signup={false}/>
    
        </div>

        
            
      

            </AuthContainer>

        )
    }
}

const mapStateToProps = state => {
    return {
        loading:state.auth.loading,//looking at what the authReducer via Rootreducer in index.js
        error:state.auth.error,
        isAuth:state.auth.isAuth,
        authRedirect:state.auth.authRedirect

    }

}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,password) => dispatch(actions.auth(email,password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/shop')),
        onGoogleAuth:()=> dispatch(actions.authViaGoogle())
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login); 