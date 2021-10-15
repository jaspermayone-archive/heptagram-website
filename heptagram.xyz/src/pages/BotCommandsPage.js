import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/style-commands.css';

function BotCommandsPage() {
    return (
        <div className="cmd">
            <Header/>
            <div className="body">
            <main>
                <h1>Heptagram Commands</h1>
                <div className="tabs">
                    <div className="tabs__sidebar">
                        <button className="tabs__button tabs__button--active" data-for-tab="1">Moderation</button>
                        <button className="tabs__button" data-for-tab="2">Bot Settings & Automation</button>
                        <button className="tabs__button" data-for-tab="3">Informational</button>
                        <button className="tabs__button" data-for-tab="4">Music</button>
                        <button className="tabs__button" data-for-tab="5">Fun</button>
                    </div>
                    <div className="tabs__content tabs__content--active" data-tab="1">
                        <table>
                            <thead>
                                <tr>
                                    <th>Command</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="command">!ban &#60;@&#62;
                                </td>
                                <td>Ban User</td>
                            </tr>
                            <tr>
                                <td className="command">!clear</td>
                                <td>Clear messages</td>
                            </tr>
                            <tr>
                                <td className="command">!kick &#60;@&#62;
                                </td>
                                <td>Kick User</td>
                            </tr>
                            <tr>
                                <td className="command">!mute &#60;@&#62;
                                </td>
                                <td>Mute User</td>
                            </tr>
                            <tr>
                                <td className="command">!unmute &#60;@&#62;
                                </td>
                                <td>Unmute User</td>
                            </tr>
                            <tr>
                                <td className="command">!wipe</td>
                                <td>Clear with options</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tabs__content" data-tab="2">
                        <table>
                            <thead>
                                <tr>
                                    <th>Command</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="command">!setup</td>
                                <td>Configures the bot in the server</td>
                            </tr>
                            <tr>
                                <td className="command">!language</td>
                                <td>Sets/Displays the server language</td>
                            </tr>
                            <tr>
                                <td className="command">!uptime</td>
                                <td>Gets the server uptime</td>
                            </tr>
                            <tr>
                                <td className="command">!announce</td>
                                <td>Make an announcement</td>
                            </tr>
                            <tr>
                                <td className="command">!invite</td>
                                <td>Sends a link to invite the bot</td>
                            </tr>
                            <tr>
                                <td className="command">!prefix</td>
                                <td>Sets/Displays the prefix</td>
                            </tr>
                            <tr>
                                <td className="command">!command</td>
                                <td>Enables/Disables the command you want</td>
                            </tr>
                            <tr>
                                <td className="command">!channelonly</td>
                                <td>Makes a command work only in some channels</td>
                            </tr>
                            <tr>
                                <td className="command">!requiredrole</td>
                                <td>Specifies what role each command requires</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tabs__content" data-tab="3">
                        <table>
                            <thead>
                                <tr>
                                    <th>Command</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="command">!ping</td>
                                <td>Returns the Bot Ping</td>
                            </tr>
                            <tr>
                                <td className="command">!api</td>
                                <td>Gives Heptagram API information</td>
                            </tr>
                            <tr>
                                <td className="command">!bots</td>
                                <td>Shows Heptagram Bots informations</td>
                            </tr>
                            <tr>
                                <td className="command">!contributors</td>
                                <td>Shows the Heptagram Contributors</td>
                            </tr>
                            <tr>
                                <td className="command">!info</td>
                                <td>Shows Heptagram's information</td>
                            </tr>
                            <tr>
                                <td className="command">!repo</td>
                                <td>Sends the Heptagram Repository link</td>
                            </tr>
                            <tr>
                                <td className="command">!support</td>
                                <td>Sends the bot Support Server link</td>
                            </tr>
                            <tr>
                                <td className="command">!server</td>
                                <td>Gives your server informations</td>
                            </tr>
                            <tr>
                                <td className="command">!user</td>
                                <td>Shows a user information</td>
                            </tr>
                            <tr>
                                <td className="command">!avatar</td>
                                <td>Gets user avatar</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tabs__content" data-tab="4">
                        <table>
                            <thead>
                                <tr>
                                    <th>Command</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="command">!play</td>
                                <td>Play the given song</td>
                            </tr>
                            <tr>
                                <td className="command">!skip</td>
                                <td>Skip the playing song</td>
                            </tr>
                            <tr>
                                <td className="command">!stop</td>
                                <td>Stop the current song</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tabs__content" data-tab="5">
                        <table>
                            <thead>
                                <tr>
                                    <th>Command</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="command">!cat</td>
                                <td>Sends a random cat picture</td>
                            </tr>
                            <tr>
                                <td className="command">!clyde</td>
                                <td>Get a custom clyde message</td>
                            </tr>
                            <tr>
                                <td className="command">!coinflip</td>
                                <td>Flips a coin for heads or tails</td>
                            </tr>
                            <tr>
                                <td className="command">!dadjoke</td>
                                <td>Sends a random dad joke</td>
                            </tr>
                            <tr>
                                <td className="command">!diceroll</td>
                                <td>Rolls a dice for a number 1-6</td>
                            </tr>
                            <tr>
                                <td className="command">!encouragement</td>
                                <td>Says a random form of encouragement</td>
                            </tr>
                            <tr>
                                <td className="command">!hack &#60;@&#62;
                                </td>
                                <td>Just a fun command</td>
                            </tr>
                            <tr>
                                <td className="command">!hug &#60;@&#62;
                                </td>
                                <td>Hug someone</td>
                            </tr>
                            <tr>
                                <td className="command">!joke</td>
                                <td>Displays a joke</td>
                            </tr>
                            <tr>
                                <td className="command">!math</td>
                                <td>Calculates, solves an equation</td>
                            </tr>
                            <tr>
                                <td className="command">!moviequote</td>
                                <td>Says a quote from a movie provided, or a random movie</td>
                            </tr>
                            <tr>
                                <td className="command">!slap</td>
                                <td>Slaps a user</td>
                            </tr>
                            <tr>
                                <td className="command">!urban</td>
                                <td>Gets an urban dictionary definition</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="other-command">
                    <i className="fas fa-lightbulb fa-2x" style={{marginBottom: '1.5rem'}}></i>
                    <br/>
                    Use <b className="command">!help</b> to see the Heptagram menu on your server and read more about the
                    commands
                </p>
            </main>
            </div>
            <Footer/>
        </div>
    )
}

export default BotCommandsPage
