import React from 'react'

import BotMenu from '../assets/bot-menu.PNG';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/styles.css';

function HomePage() {
    return (
        <div className="HomePage">
            <Header />
            <>
            <div class="description">
                <div class="left">
                    <h1>Heptagram is the all-in-one Discord Bot for your server!</h1>
                    <p>
                        Heptagram is the All-In-One, Open-Source Discord Bot with the goal to be the single bot needed for any
                        server.
                    </p>
                    <a
                        href="https://discord.com/oauth2/authorize?client_id=783073095036043274&permissions=122682682614&scope=bot%20messages.read%20applications.commands">
                        <button class="invite-the-bot">
                            Invite the bot &nbsp;
                            <i class="fab fa-discord"></i>
                        </button>
                    </a>
                </div>
                <div class="right">
                    <img src={BotMenu} alt="Bot Menu" class="bot" />
                </div>
            </div>
            <div class="features">
                <h2>Features</h2>
                <div class="feature">
                    <i class="fas fa-shield-alt fa-2x"></i>
                    <a class="feature-link" href="/bot-commands">
                        <p>Moderation</p>
                    </a>
                </div>
                <div class="feature">
                    <i class="fas fa-robot fa-2x"></i>
                    <a class="feature-link" href="/bot-commands">
                        <p>Automation</p>
                    </a>
                </div>
                <div class="feature">
                    <i class="fas fa-music fa-2x"></i>
                    <a class="feature-link" href="/bot-commands">
                        <p>Music</p>
                    </a>
                </div>
                <div class="feature">
                    <i class="far fa-laugh-beam fa-2x"></i>
                    <a class="feature-link" href="/bot-commands">
                        <p>Fun</p>
                    </a>
                </div>
            </div>
            <div class="before-footer">
                <p class="invite">
                    Enhance any Discord server now, for free!
                </p>
                <a
                    href="https://discord.com/oauth2/authorize?client_id=783073095036043274&permissions=122682682614&scope=bot%20messages.read%20applications.commands">
                    <button class="invite-the-bot reminder">
                        Invite the bot &nbsp;
                        <i class="fab fa-discord"></i>
                    </button>
                </a>
            </div>
            </>
            <Footer/>
        </div>
    )
}

export default HomePage
