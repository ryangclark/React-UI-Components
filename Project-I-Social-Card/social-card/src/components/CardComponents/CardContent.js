import React from 'react';
import './Card.less';

const CardContent = () => {
    return (
        <div className="card-content">
            <p className="page-link-title">Get started with React</p>
            <p className="page-link-description">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className="page-link-simple-url">reactjs.org</p>
        </div>
    );
};

export default CardContent;