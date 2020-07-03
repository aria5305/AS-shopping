import React, {Component} from 'react'; 
import ClothesItems from '../../components/ClothesItems/ClothesItems'
import classes from './Shop.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import FilterSideBar from '../FilterSideBar/FilterSideBar'

class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
        }
    }

    componentDidMount(){
        if(this.props.items.length === 0){
        this.props.onFetchingData();        

        }

        if(this.props.localId){
            this.props.onFetchCart(this.props.localId)
        }
    }

    render() {
        return (
            <div className={classes.MainContainer}>
                <FilterSideBar/>

                <ClothesItems/>
        
               

                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        items:state.clothes.items,
        loading:state.clothes.loading,
        localId:state.auth.localId
      
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchingData:() => dispatch(actions.fetching()),
        onFetchCart: (id)=>dispatch(actions.fetchingUserCart(id))
     
     
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop);