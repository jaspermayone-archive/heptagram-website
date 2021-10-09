import React from 'react'

import HeptagramLogo from '../assets/full-heptagram-logo.png';

import '../styles/styles.css';

function Header() {
    return (
        <nav class="navbar">
            <img src={HeptagramLogo} alt="Heptagram Logo" class="logo" />
            <ul class="nav-menu">
                <li class="nav-item second">
                    <a href="https://heptagram.xyz" class="nav-link home active">Home</a>
                </li>
                <li class="nav-item">
                    <a href="https://discord.gg/HSupF99kpq" class="nav-link server">Support Server</a>
                </li>
                <li class="nav-item">
                    <a href="/bot-commands" class="nav-link commands">Commands</a>
                </li>
                <li class="nav-item">
                    <a href="https://api.heptagram.xyz" class="nav-link api">API</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    )
}

export default Header
