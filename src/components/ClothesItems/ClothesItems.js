import React from 'react'
import ClothesItem from './ClothesItem/ClothesItem'
import classes from './ClothesItems.module.scss'
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux'
import Spinner from '../UI/Spinner/Spinner'

const clothesItems = props => {
    
    
    let items 
    
    
    if(props.loading){
        items = 
        <div className={classes.loading}>
           <Spinner/>
           <h1>Loading...</h1>
        </div> 
        
        
    }else{
        items = props.items.map((item,index) => {
    
     
            return <ClothesItem key={item.itemName+index} 
            removeOne={()=> props.onRemoveOneFromCart(props.cart, item)}
            clicked={ ()=>props.onAddToCart(props.cart, props.itemSelected, props.localId)} item={item} /> 
        })
    
    }

    return (
        <div className={classes.ClothesItems}>
            
           {items}
        </div>
    );
}


const mapStateToProps = state => {
    return {
        cart:state.clothes.cart,
        loading:state.clothes.loading,
        items:state.clothes.items,
        itemSelected:state.clothes.itemSelected,
        localId:state.auth.localId
      
      
    }
}

const mapDispatchToProps = dispatch => {
    return {
       onAddToCart:(cart, item,id) => dispatch(actions.addToCart(cart, item,id)),
    //    onRemoveOneFromCart:(cart,item) => dispatch(actions.removeOneFromCart(cart,item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(clothesItems)