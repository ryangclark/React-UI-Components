import React from 'react';
import './Header.less';

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h2 className="account-name">Lambda School</h2>
            <p className="account-handle">@LambdaSchool</p>
            <p className="dot"> • </p>
            <p className="post-date">26 jan</p>
        </div>
        
    );
};

export default HeaderTitle;