import React,{useState} from 'react'
import classes from './ClothesItem.module.scss'
import Button from '../../UI/Button/Button'
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ClothesItem = props => {



let size =  props.item.size.map((s,index) => {
  
    return <li 
        className= {
            props.itemSelected.itemName === props.item.itemName && props.itemSelected.size === s  ? classes.ClothesItem_sizeItem___active :  classes.ClothesItem_sizeItem}
        key={s+index} 
        onClick={ (event) => {
            console.log(event.currentTarget);
         props.onSizeSelected(s,props.item)
        }}> {s}</li>
           
         
})

return(
    <div className={classes.ClothesItem}>
        
        <div className={classes.ClothesItem_image} style={{backgroundImage:`url(${props.item.img})`}}>
  
        </div>

        <div className={classes.ClothesItem_nameSizeContainer}>
            <p className={classes.ClothesItem_item}>{props.item.itemName} </p>
            <ul className={classes.ClothesItem_sizeList}>
                {size}
            </ul>
        </div>
        <div className={classes.ClothesItem_middle}>
           
                <p className={classes.ClothesItem_price}>${props.item.price}</p>
          
            
                <div className={classes.ClothesItem_amount}>
                    {props.cart.find(i => i.itemName === props.item.itemName) ? 
                    <FontAwesomeIcon icon="cart-arrow-down"/>
                    : null}</div>
        </div>

                <Button disable={props.itemSelected.itemName !== props.item.itemName} btnType="addCart" clicked={props.clicked}>Add to cart</Button>
    
    </div>
)
}


const mapStateToProps = state => {
    return {
        cart:state.clothes.cart,
        itemSelected:state.clothes.itemSelected
   
      
      
    }
}

const mapDispatchToProps = dispatch => {
    return {
     onSizeSelected:(size,item) =>  dispatch(actions.sizeSelected(size,item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClothesItem);