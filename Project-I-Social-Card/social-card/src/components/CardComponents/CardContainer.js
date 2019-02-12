import React from 'react';
import './Card.less';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    function handleClick(e) {
        var win = window.open('https://www.reactjs.org', '_blank');
        win.focus();
    }
    return (
        <div className="card-container" onClick={handleClick}>
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default CardContainer;