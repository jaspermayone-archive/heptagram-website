import React from 'react';
import { Link } from 'react-router-dom';
import HeptagramLogo from '../Assets/full-heptagram-logo.png';
function Footer() {
    return (
        <footer>
            <div className="left-part">
                <Link to="/">
                    <img src={HeptagramLogo} alt="Heptagram Logo" className="logo-footer" />
                </Link>
                <p className="small-description">The All-in-one Discord Bot for your Server.</p>
                <Link className="github-link" to="https://github.com/Heptagram-Bot-Project">
                    <i
                        className="fab fa-github fa-2x"
                        style={{ color: 'white', marginLeft: '1rem' }}
                    ></i>
                </Link>
                <Link className="discord-link" to="https://discord.gg/yHFQWNtNDt">
                    <i
                        className="fab fa-discord fa-2x"
                        style={{ color: 'white', marginLeft: '1rem' }}
                    ></i>
                </Link>
            </div>
            <div className="right-part">
                <p className="footer-links">Links</p>
                <Link to="/">Home</Link>
                <Link to="/bot-commands">Bot Commands</Link>
                <Link to="/contributors">Contributors</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
            </div>
            <div className='most-right-part'>
                <a href="https://www.netlify.com">
                    <img
                        src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
                        alt="Deploys by Netlify"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
