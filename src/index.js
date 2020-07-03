import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app'
import thunk from 'redux-thunk'; 
import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware,compose, combineReducers} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import authReducer from './store/reducers/auth';
import clothesReducer from './store/reducers/clothes'


const rootReducer = combineReducers({
    clothes:clothesReducer,
    auth:authReducer
 
})

const composeEnhancers = process.env.NODE_ENV ==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

var firebaseConfig = {
  apiKey: "AIzaSyB33rQy2zf8Hb7X7v3ashLtriEsxjvB1TU",
  authDomain: "react-myshopapp.firebaseapp.com",
  databaseURL: "https://react-myshopapp.firebaseio.com",
  projectId: "react-myshopapp",
  storageBucket: "react-myshopapp.appspot.com",
  messagingSenderId: "1031954690066",
  appId: "1:1031954690066:web:6f676fe0d9ea83a29e68cb",
  measurementId: "G-3P1XDJE6BM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
      </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
