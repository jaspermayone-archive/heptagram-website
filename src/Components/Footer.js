import React from 'react';

import HeptagramLogo from '../Assets/full-heptagram-logo.png';
function Footer() {
    return (
        <footer>
            <div className="left-part">
                <a href="/">
                    <img src={HeptagramLogo} alt="Heptagram Logo" className="logo-footer" />
                </a>
                <p className="small-description">The All-in-one Discord Bot for your Server.</p>
                <a className="github-link" href="https://github.com/Heptagram-Bot-Project">
                    <i
                        className="fab fa-github fa-2x"
                        style={{ color: 'white', marginLeft: '1rem' }}
                    ></i>
                </a>
                <a className="discord-link" href="https://discord.gg/yHFQWNtNDt">
                    <i
                        className="fab fa-discord fa-2x"
                        style={{ color: 'white', marginLeft: '1rem' }}
                    ></i>
                </a>
            </div>
            <div className="right-part">
                <p className="footer-links">Links</p>
                <a href="/">Home</a>
                <a href="/bot-commands">Bot Commands</a>
                <a href="/contributors">Contributors</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
            </div>
        </footer>
    );
}

export default Footer;
