import React from 'react'

import HeptagramLogo from '../assets/full-heptagram-logo.png';

import '../styles/styles.css'

function Footer() {
    return (
        <footer>
            <div class="left-part">
                <img src={HeptagramLogo} alt="Heptagram Logo" class="logo-footer" />
                <p class="small-description">The All-in-one Discord Bot for your Server.</p>
                <a class="github-link" href="https://github.com/Heptagram-Bot">
                    <i class="fab fa-github fa-2x"></i>
                </a>
                <a class="discord-link" href="https://discord.gg/HSupF99kpq">
                    <i class="fab fa-discord fa-2x"></i>
                </a>
            </div>
            <div class="right-part">
                <p class="footer-links">
                    Links
                </p>
                <a href="https://heptagram.xyz">Home</a>
                <a href="/bot-commands">Bot Commands</a>
                <a href="/contributors">Contributors</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
            </div>
            <div class="credit-midouwebdev">
                <p>This website was designed and coded by the Heptagram Website team, lead by <a class="main-dev" href="https://github.com/MidouWebDev">MidouWebDev</a></p>
            </div>
    </footer>
    )
}

export default Footer
