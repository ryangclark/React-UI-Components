import React from 'react';
import './Button.css';

import NumberButton from './NumberButton';

const NumberButtonContainer = () => {
    return (
        <div className="number-button-container">
            <NumberButton digit="7" />
            <NumberButton digit="8" />
            <NumberButton digit="9" />
            <NumberButton digit="4" />
            <NumberButton digit="5" />
            <NumberButton digit="6" />
            <NumberButton digit="1" />
            <NumberButton digit="2" />
            <NumberButton digit="3" />
            <NumberButton digit="0" />
        </div>
    );
};

export default NumberButtonContainer;