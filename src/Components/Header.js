import React from 'react';

import HeptagramLogo from '../Assets/full-heptagram-logo.png';
import Hamburger from './Hamburger';
import {Link ,Navigate,useNavigate} from 'react-router-dom';
function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/">
                    <img src={HeptagramLogo} alt="Heptagram Logo" className="logo" />
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item second">
                        <Link to="/" className="nav-link home active">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://discord.gg/yHFQWNtNDt" className="nav-link server">
                            Support Server
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to="/bot-commands" className="nav-link commands">
                            Commands
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://api.heptagrambotproject.com" className="nav-link api">
                            API
                        </a>
                    </li>
                </ul>
                <div className="hamburger" id="app">
                    <Hamburger />
                </div>
            </nav>
        </header>
    );
}

export default Header;
