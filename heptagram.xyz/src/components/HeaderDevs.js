import React from 'react'

import HeptagramLogo from '../Assets/full-heptagram-logo.png'

function HeaderDevs() {
    return (
        <header className="header">
            <a href="/home">
                <img src={HeptagramLogo} alt="heptagram-logo" className="logo" />
            </a>
            <h1 style={{fontSize: '3.1rem'}}>Developers</h1>
        </header>
    )
}

export default HeaderDevs
