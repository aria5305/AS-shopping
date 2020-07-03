import React from 'react';
import classes from './input.module.scss';


const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.input_element];

  

    if(props.class === 'cartPrev'){
        inputClasses.push(classes.cartPrev)
    }else{
        if (props.invalid && props.shouldValidate && props.touched) {
            inputClasses.push(classes.Invalid);
        }
    }

  

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
            
                style={props.style}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

   

        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    style={props.style}
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.input}>
       
            <label className={classes.input_label}>{props.label}</label>
            {inputElement}
        </div>

    );

};

export default input;
