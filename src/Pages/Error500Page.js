import React from 'react';

import HeptagramLogo from '../Assets/full-heptagram-logo.png';

import '../Styles/style-error.css';

function Error404Page() {
    return (
        <div className="container-error">
            <img src={HeptagramLogo} className="logo" alt="heptagram-logo" />
            <h1>500</h1>
            <h2 className="sub-title">🚨 Internal Server Error !</h2>
            <p className="info">Something went wrong. 🤷‍♂️</p>
            <a class="action-button" href="https://heptagrambotproject.com">
                Raise an issue
            </a>
        </div>
    );
}

export default Error404Page;
