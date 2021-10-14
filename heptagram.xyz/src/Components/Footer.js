import React from 'react'

import HeptagramLogo from '../Assets/full-heptagram-logo.png';
function Footer() {
    return (
        <footer>
            <div className="left-part">
                <img src={HeptagramLogo} alt="Heptagram Logo" className="logo-footer" />
                <p className="small-description">The All-in-one Discord Bot for your Server.</p>
                <a className="github-link" href="https://github.com/Heptagram-Bot">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a className="discord-link" href="https://discord.gg/HSupF99kpq">
                    <i className="fab fa-discord fa-2x"></i>
                </a>
            </div>
            <div className="right-part">
                <p className="footer-links">
                    Links
                </p>
                <a href="https://heptagram.xyz">Home</a>
                <a href="/bot-commands">Bot Commands</a>
                <a href="/contributors">Contributors</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
            </div>
            <div className="credit-midouwebdev">
                <p>This website was designed and coded by the Heptagram Website team, lead by <a className="main-dev" href="https://github.com/MidouWebDev">MidouWebDev</a></p>
            </div>
    </footer>
    )
}

export default Footer
