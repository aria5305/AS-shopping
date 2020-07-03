import React from 'react';
import classes from './ToggleSidebar.module.scss'

const toggleSidebar = props => (
    <div className={classes.toggleSidebar} onClick={props.clicked}></div>
)

export default toggleSidebar