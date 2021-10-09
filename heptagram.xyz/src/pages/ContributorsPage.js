import React from 'react'
import HeaderDevs from '../components/HeaderDevs'
import Footer from '../components/Footer'

import '../styles/style-contributors.css'

function ContributorsPage() {
    return (
        <div>
            <HeaderDevs />
            <>
            <div className="main">
                <div class="owner">
                    <img class="avatar" src="https://github.com/j-dogcoder.png" alt="j-dogcoder'a avatar" />
                    <p class="name">Jasper Mayone (j-dogcoder)</p>
                    <p class="position">Owner</p>
                    <a href="https://github.com/j-dogcoder"><i class="fab fa-github fa-2x"></i></a>
                </div>
                <br />
                <div class="head-developer">
                    <img class="avatar" src="https://github.com/MidouWebDev.png" alt="midou's avatar" />
                    <p class="name">MidouWebDev</p>
                    <p class="position">Website Maintainer <br/> & <br/> Head Web Developer</p>
                    <a href="https://github.com/MidouWebDev"><i class="fab fa-github fa-2x"></i></a>
                </div>
                <br />
                <div class="developer">
                    <img class="avatar" src="https://github.com/Panquesito7.png" alt="panquesito's avatar" />
                    <p class="name">David Leal</p>
                    <p class="position">Bot Maintainer <br/> & <br/> Web Developer</p>
                    <a href="https://github.com/Panquesito7"><i class="fab fa-github fa-2x"></i></a>
                </div>
                <br />
                <div class="head-developer second">
                    <img class="avatar" src="https://github.com/Vyvy-vi.png" alt="Vyvy-vi's avatar" />
                    <p class="name">Vyom Jain (Vyvy-vi)</p>
                    <p class="position">Head API Developer</p>
                    <a href="https://github.com/Vyvy-vi"><i class="fab fa-github fa-2x"></i></a>
                </div>
                <div class="developers">
                    <div class="developer">
                        <img class="avatar" src="https://github.com/thinkverse.png" alt="thinkverse's avatar" />
                        <p class="name">Kim Hallberg (thinkverse)</p>
                        <p class="position">Bot Developer</p>
                        <a href="https://github.com/thinkverse"><i class="fab fa-github fa-2x"></i></a>
                    </div>
                    <div class="developer">
                        <img class="avatar" src="https://github.com/akzain.png" alt="zaink's avatar" />
                        <p class="name">Zain.k</p>
                        <p class="position">Web Developer</p>
                        <a href="https://github.com/akzain"><i class="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
                <div class="others">
                    <a href="https://github.com/Heptagram-Bot/Heptagram/graphs/contributors">
                        <button class="other-contributors">Bot Contributors</button>
                    </a>
                    <a href="https://github.com/Heptagram-Bot/Heptagram.xyz/graphs/contributors">
                        <button class="other-contributors">Website Contributors</button>
                    </a>
                </div>
            </div>
            </>
            {/* <Footer /> */}
        </div>
    )
}

export default ContributorsPage
