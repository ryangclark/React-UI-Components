import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className="number-button" id={props.digit}>{props.digit}</div>
    );
};

export default NumberButton;