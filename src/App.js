import React, { Component } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import {Route,Switch,Redirect} from 'react-router-dom';
import Shop from './containers/Shop/Shop'; 
import Hero from './components/Hero/Hero';
import Cart from './components/Cart/Cart';
import SignUp from './containers/Auth/signUp/signUp'; 
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/logout/logout';
import {connect} from 'react-redux';
import { library} from '@fortawesome/fontawesome-svg-core';
import {faTrash,faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import * as actions from './store/actions/index'

import {fab} from '@fortawesome/free-brands-svg-icons';

// import {connect} from 'react-redux';



library.add(fab,faTrash,faCartArrowDown);

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignIn();
  }
  render(){
  let routes = (
    <Switch>
      <Route path='/login' component={Login}/> 
      <Route path='/signup'  component={SignUp}/> 
      <Route path='/shop'  component={Shop}/>

      <Route path="/" exact component={Hero}/>
      <Redirect to='/signup' component={SignUp}/>
    </Switch>
  )
  if(this.props.isAuth){
    routes =(
      <Switch>
      <Route path='/logout' exact component={Logout}/>
      <Route path='/cart'  exact component={Cart}/>
      {/* <Route path='/orders' component={asyncOrder}/> */}
      {/* <Route path='/auth' component={asyncAuth}/> */}
      <Route path='/' exact component={Shop}/>
      <Redirect to='/'></Redirect>
   </Switch>   
   )
  }  
  return (
    
    <Layout>
      {routes}
    

      
    </Layout>
  );
}

}

const mapStateToProps = state => {
  return {
     
      isAuth:state.auth.isAuth,
     
  }

}

const mapDispatchToProps =dispatch => {
  return  {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())

    

 }
  
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
