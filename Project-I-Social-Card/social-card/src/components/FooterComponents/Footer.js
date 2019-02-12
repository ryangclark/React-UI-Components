import React from 'react';
import './Footer.less';

const Footer = () => {
    return (
        <div className="post-footer">
            <div className="post-reply"><i class="far fa-comment"></i></div>
            <div className="post-retweet"><i class="fas fa-sync"></i> 6</div>
            <div className="post-favorite"><i class="far fa-heart"></i> 4</div>
            <div className="post-direct-message"><i class="far fa-envelope"></i></div>
        </div>
    );
};

export default Footer;