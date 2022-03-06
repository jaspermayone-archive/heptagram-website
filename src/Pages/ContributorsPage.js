import React from 'react';

import HeaderDevs from '../Components/HeaderDevs';
import Footer from '../Components/Footer';

import '../Styles/style-contributors.css';

function HomePage() {
    return (
        <div className="devs">
            <HeaderDevs />
            <div className="body">
                <main>
                    <div className="owner">
                        <img
                            className="avatar"
                            src="https://github.com/j-dogcoder.png"
                            alt="j-dogcoder'a avatar"
                        />
                        <p className="name">Jasper Mayone (j-dogcoder)</p>
                        <p className="position">Owner</p>
                        <a href="https://github.com/j-dogcoder">
                            <i
                                className="fab fa-github"
                                style={{ color: '#2c2f33', transform: 'scale(1.5)' }}
                            ></i>
                        </a>
                    </div>
                    <div className="head-developer">
                        <img
                            className="avatar"
                            src="https://github.com/MidouWebDev.png"
                            alt="midou's avatar"
                        />
                        <p className="name">MidouWebDev</p>
                        <p className="position">
                            Website Maintainer <br /> & <br /> Head Web Developer
                        </p>
                        <div className="links">
                            <div className="link">
                                <a href="https://github.com/MidouWebDev">
                                    <i
                                        className="fab fa-github"
                                        style={{ color: '#2c2f33', transform: 'scale(1.5)' }}
                                    ></i>
                                </a>
                            </div>
                            <div className="link">
                                <a href="https://dev.to/midouwebdev">
                                    <i
                                        className="fab fa-dev"
                                        style={{ color: '#2c2f33', transform: 'scale(1.8)' }}
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="developer">
                        <img
                            className="avatar"
                            src="https://github.com/Panquesito7.png"
                            alt="panquesito's avatar"
                        />
                        <p className="name">David Leal</p>
                        <p className="position">
                            Bot Maintainer <br /> & <br /> Web Developer
                        </p>
                        <div className="links">
                            <div className="link">
                                <a href="https://github.com/Panquesito7">
                                    <i
                                        className="fab fa-github"
                                        style={{ color: '#2c2f33', transform: 'scale(1.5)' }}
                                    ></i>
                                </a>
                            </div>
                            <div className="link">
                                <a href="https://twitter.com/David_Leal_7">
                                    <i
                                        className="fab fa-twitter"
                                        style={{ color: '#2c2f33', transform: 'scale(1.5)' }}
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="head-developer second">
                        <img
                            className="avatar"
                            src="https://github.com/Vyvy-vi.png"
                            alt="Vyvy-vi's avatar"
                        />
                        <p className="name">Vyom Jain (Vyvy-vi)</p>
                        <p className="position">Head API Developer</p>
                        <a href="https://github.com/Vyvy-vi">
                            <i
                                className="fab fa-github"
                                style={{ color: '#2c2f33', transform: 'scale(1.5)' }}
                            ></i>
                        </a>
                    </div>
                    <div className="developers">
                        <div className="developer">
                            <img
                                className="avatar"
                                src="https://github.com/anubhav06.png"
                                alt="anubhav's avatar"
                            />
                            <p className="name">Anubhav Gupta</p>
                            <p className="position">Web Developer</p>
                            <div className="links">
                                <div className="link">
                                    <a href="https://github.com/anubhav06">
                                        <i
                                            className="fab fa-github"
                                            style={{ color: '#2c2f33', transform: 'scale(1.5)' }}
                                        ></i>
                                    </a>
                                </div>
                                <div className="link">
                                    <a href="https://twitter.com/anubhav_gupta06">
                                        <i
                                            className="fab fa-twitter"
                                            style={{ color: '#2c2f33', transform: 'scale(1.5)' }}
                                        ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="developer">
                            <img
                                className="avatar"
                                src="https://github.com/akzain.png"
                                alt="zaink's avatar"
                            />
                            <p className="name">Zain.k</p>
                            <p className="position">Web Developer</p>
                            <a href="https://github.com/akzain">
                                <i
                                    className="fab fa-github"
                                    style={{ color: '#2c2f33', transform: 'scale(1.5)' }}
                                ></i>
                            </a>
                        </div>
                    </div>
                    <div className="others">
                        <a href="https://github.com/Heptagram-Bot-Project/bot/graphs/contributors">
                            <button className="other-contributors">Bot Contributors</button>
                        </a>
                        <a href="https://github.com/Heptagram-Bot-Project/bot/graphs/contributors">
                            <button className="other-contributors">Website Contributors</button>
                        </a>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
