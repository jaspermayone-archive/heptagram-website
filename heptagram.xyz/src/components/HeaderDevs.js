import React from 'react'

import HeptagramLogo from '../assets/full-heptagram-logo.png'

function HeaderDevs() {
    return (
        <header className="header">
            <img src={HeptagramLogo} alt="heptagram-logo" className="logo" />
            <h1 style={{fontSize: '3.1rem'}}>Developers</h1>
        </header>
    )
}

export default HeaderDevs
