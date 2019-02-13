import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div id={props.id} className="action-button">{props.buttonValue}</div>
    );
};

export default ActionButton;