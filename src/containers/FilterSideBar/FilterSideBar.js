import React,{ Component } from "react";
import classes from "./FilterSideBar.module.scss";
import Input from '../../components/UI/Input/input';
import {checkValidity} from '../../share/utility';
import Aux from '../../hoc/Auxillary';

class FilterSideBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            controls:{
                search: {
                    elementType:'input',
                    elementConfig:{
                        type:'input',
                        placeholder:'Search for item...',
                      
                    },
                    id:'search',
                    value:'',
                    validation:{
                        required:true,
                    },
                    valid:false,
                    touched:false,
                 
                },
                Category: {
                    elementType:'select',
                    elementConfig:{
                        type:'select',
                        options:[{value:'',displayValue:'Filter by Category'},
                        {value:'Top',displayValue:'Top'},
                        {value:'Dress', displayValue:'Dress'}, 
                        {value:'Jacket',displayValue:'Jacket'},
                        {value:'Pants',displayValue:'Pants'},
                        {value:'Shoes',displayValue:'Shoes'},
                        {value:'Accessory',displayValue:'Accessory'},
                    ],
                      
                    },
                    id:'category',
                    value:'',
                    // label:'Filter by colour:',
                    // style:{'width':'100%','display':'inline-block'},
                },

                colour: {
                    elementType:'select',
                    elementConfig:{
                        type:'colour',
                        options:[{value:'',displayValue:'Filter by colour'},{value:'blue',displayValue:'blue'},{value:'black',displayValue:'black'},{value:'white',displayValue:'white'},
                    {value:'pink',displayValue:'pink'}],
                      
                    },
                    id:'select',
                    value:'',
                    // label:'Filter by colour:',
                    // style:{'width':'100%','display':'inline-block'},
                },
                priceRange: {
                    elementType:'select',
                    elementConfig:{
                        type:'select',
                        options:[{value:'',displayValue:'Filter by Price'},
                        {value:'10-49.99',displayValue:'10 - 49.99'},
                        {value:'50-89.99',displayValue:'50 - 89.99'},
                        {value:'90-150',displayValue:'90 - 150'},
                    {value:'150+',displayValue:'150+'}],
                      
                    },
                    id:'price',
                    value:'',
                    // label:'Filter by colour:',
                    // style:{'width':'100%','display':'inline-block'},
                },


             
              
               
            },
        }
    }

    inputChangedHandler = (event,controlName) => {

        const updatedControlElement = this.state.controls[controlName];
   

        const updatedControl = {
            ...this.state.controls, 
            [controlName]:{
                ...updatedControlElement,
                value:event.target.value,
                valid:checkValidity(event.target.value,updatedControlElement.validation),
                touched:true
            }
        }


        this.setState({controls:updatedControl})


    }

    render(){

        const formElementsArray = []; 

       
        for(let key in this.state.controls){
            formElementsArray.push({
                id:key,
                config:this.state.controls[key]
            })
        }

        formElementsArray.shift();

        let form = formElementsArray.map(formElement => {

            
            return (
                <div className={classes.inputContainer}>
               
                <Input 
                    key={formElement.id}
                    label ={formElement.config.label}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    style={formElement.config.style}
       
                />
                </div>
            )
        })


        return(
            <div className={classes.FilterContainer}>
                <Input 
                elementConfig={this.state.controls.search.elementConfig} 
                value={this.state.controls.search.value}
                changed ={(event) => this.inputChangedHandler(event,"search")}
                > </Input>
                    <div className={classes.filter}>
                        <h3 className={classes.filter_header}>Filters</h3>
                        {form}
                    </div>
                    
                    
            </div>
        )
    }
}

export default FilterSideBar;