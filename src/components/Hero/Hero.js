import React from 'react';
import classes from './Hero.module.scss';
import Button from '../UI/Button/Button';
const hero = props => (
    <div className={classes.Hero}>
        <h1 className={classes.Hero_heading}>(Re)/Define your style</h1>
        <h4 className={classes.Hero_heading___sub}>Start exploring 1000+ brands here.</h4>
        <Button btnType="Hero"><span>Shop Now</span></Button>
    </div>
)

export default hero; 