// eslint-disable-next-line no-unused-vars
import React from 'react';
import classes from './Button.module.css';

const Button = props => {

    return(
        <button
            className={classes.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default  Button;
