import React, { Component } from 'react'
import classes from './CheckoutFields.module.scss';
import Input from '../../components/UI/Input/input';
import {checkValidity} from '../../share/utility';
import Button from '../../components/UI/Button/Button';
class CheckoutFields extends Component{
    constructor(props){
        super(props)
        this.state = {
           controls:{
            email: {
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your email address',
                    name:'email',
                },
                label:'Email:',
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false,
            },
            street: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your address',
                    name:'address',
                },
                label:'Street:',
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
            },
            zipCode: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your postal code',
                    name:'zipcode',
                },
                label:'ZipCode',
                value:'',
                validation:{
                    required:true,
                    length:5,
                },
                valid:false,
                touched:false,
            },
            country: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country',
                    name:'country',
                },
                label:'Country:',
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
              
            },
            deliveryMethod: {
                elementType:'select',
                elementConfig:{
                    options:[{value:'fastest', displayValue:'Fastest'},
                             {value:'cheapest', displayValue:'Cheapest'},
                ],
                name:'deliveryMethod',
            },
                value:'fastest',
                label:'Delivery method',
                // validation:{}, //gets error message if here 
                touched:false,
                valid:true,

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

        let form = formElementsArray.map(formElement => {
            return (
                <Input key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    label= {formElement.config.label}
                />

            )
        })


    return (
        <div>
          

            <div className={classes.Info}>
                <form action="" method="post" class="">
                {form}

                <Button btnType="placeOrder" clicked>
                    Place Order
                </Button>
                
                </form>
            </div>
        </div>
    )
    }
}

export default CheckoutFields;