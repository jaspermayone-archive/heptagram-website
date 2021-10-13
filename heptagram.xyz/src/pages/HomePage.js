import React from 'react'

import BotMenu from '../assets/bot-menu.PNG';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/styles.css';

function HomePage() {
    return (
        <div className="homePage html">
            <Header />
            <>
            <div className="description">
                <div className="left">
                    <h1>Heptagram is the all-in-one Discord Bot for your server!</h1>
                    <p>
                        Heptagram is the All-In-One, Open-Source Discord Bot with the goal to be the single bot needed for any
                        server.
                    </p>
                    <a
                        href="https://discord.com/oauth2/authorize?client_id=783073095036043274&permissions=122682682614&scope=bot%20messages.read%20applications.commands">
                        <button className="invite-the-bot">
                            Invite the bot &nbsp;
                            <i className="fab fa-discord" style={{transform: 'scale(1.75)', padding: '10px'}}></i>
                        </button>
                    </a>
                </div>
                <div className="right">
                    <img src={BotMenu} alt="Bot Menu" className="bot" />
                </div>
            </div>
            <div className="features">
                <h2>Features</h2>
                <div className="feature">
                    <i className="fas fa-shield-alt fa-2x"></i>
                    <a className="feature-link" href="/bot-commands">
                        <p>Moderation</p>
                    </a>
                </div>
                <div className="feature">
                    <i className="fas fa-robot fa-2x"></i>
                    <a className="feature-link" href="/bot-commands">
                        <p>Automation</p>
                    </a>
                </div>
                <div className="feature">
                    <i className="fas fa-music fa-2x"></i>
                    <a className="feature-link" href="/bot-commands">
                        <p>Music</p>
                    </a>
                </div>
                <div className="feature">
                    <i className="far fa-laugh-beam fa-2x"></i>
                    <a className="feature-link" href="/bot-commands">
                        <p>Fun</p>
                    </a>
                </div>
            </div>
            <div className="before-footer">
                <p className="invite">
                    Enhance any Discord server now, for free!
                </p>
                <a
                    href="https://discord.com/oauth2/authorize?client_id=783073095036043274&permissions=122682682614&scope=bot%20messages.read%20applications.commands">
                    <button className="invite-the-bot reminder">
                        Invite the bot &nbsp;
                        <i className="fab fa-discord"></i>
                    </button>
                </a>
            </div>
            </>
            <Footer/>
        </div>
    )
}

export default HomePage
