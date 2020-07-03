import * as actionTypes from './actionTypes'; 
import * as firebase from "firebase/app";
import "firebase/auth";

export const showModal = () => {
    return {
        type:actionTypes.SHOW_MODAL 
    }
}

export const hideModal = () => {
    return {
        type:actionTypes.HIDE_MODAL
    }
}


export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (localId,email,token) => {
    
   
    
    localStorage.setItem('localId', localId)
    localStorage.setItem('token', token)
    localStorage.setItem('email', email)
    const exp =  localStorage.getItem('expirationDate')

   if(exp === null){
        const expirationDate = new Date(new Date().getTime() + 7200 * 1000);
        localStorage.setItem('expirationDate',expirationDate)
    }
   

    return {
        type:actionTypes.AUTH_SUCCESS,
        localId:localId,
        email:email,
        token:token
 
    }
}

export const checkAuthTimeout = (expiraryTime = 7200) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiraryTime * 1000);
    };
};


const clearState = () => {
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('localId');
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    return {
        type:actionTypes.CLEAR_AUTH_STATE
    }
}
export const logout = () => {

    clearState()
    
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            alert('signed out')
          }).catch(function(error) {
            alert('cannot signout')
          });



        return {
            type:actionTypes.AUTH_LOGOUT,
        }
}


export const authFailed = (error) => {
    return {
        type:actionTypes.AUTH_FAILED,
        error:error
    }
}



export const auth = (email,password,isSignup) => {
    return dispatch => {
        dispatch(authStart()); 

        if(isSignup === false) {

            firebase.auth().signInWithEmailAndPassword(email, password).then(response =>{
                
               
                dispatch(authSuccess(response.user.uid,response.user.email,response.user.refreshToken))
                localStorage.setItem('email', response.user.email)
                        
            dispatch(checkAuthTimeout())
            })
            
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                dispatch(authFailed(error))
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                  alert(errorMessage);
                }
                });
            
           
        }else{

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response =>{
            dispatch(authSuccess(response.user.uid, response.user.email,response.user.refreshToken))
           
        .catch(function(error) {
            dispatch(authFailed(error))
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        });
    })
        }
    }
}

        

export const authViaGoogle = () => {
    return dispatch => {
        dispatch(authStart()); 

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // firebase.auth().languageCode = 'pt';

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        
        dispatch(authSuccess(user.uid, user.email,user.refreshToken))
      
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
console.log(errorCode,errorMessage,email,credential)
        dispatch(authFailed(error.message))
        // ...
      });

    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(clearState())
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(clearState())
            }else{
                const localId = localStorage.getItem('localId');
                const email  = localStorage.getItem('email');
                const token  = localStorage.getItem('token');
                dispatch(authSuccess(localId,email,token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000))
            }
        }
        
    }
}


export const setAuthRedirectPath = (path) => {
    return {
        type:actionTypes.SET_AUTH_REDIRECT_PATH, 
        path:path
    }
}
