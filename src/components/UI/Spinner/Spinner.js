import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = props => (
        <div className={classes.sk}>
            <div className={[classes.sk_cube___1,classes.sk_cube].join(' ')}></div>
            <div className={[classes.sk_cube___2,classes.sk_cube].join(' ')}></div>
            <div className={[classes.sk_cube___4,classes.sk_cube].join(' ')}></div>
            <div className={[classes.sk_cube___3,classes.sk_cube].join(' ')}></div>
        </div>
)

export default Spinner;