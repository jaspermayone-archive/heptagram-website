import React from 'react';

import HeptagramLogo from '../Assets/full-heptagram-logo.png';

import '../Styles/style-error.css';

function Error404Page() {
    return (
        <div className="container-error">
            <img src={HeptagramLogo} className="logo" alt="heptagram-logo" />
            <h1>404</h1>
            <h2 className="sub-title">Page Not Found !</h2>
            <a className="action-button" href="/home">
                ← Go Back
            </a>
        </div>
    );
}

export default Error404Page;
