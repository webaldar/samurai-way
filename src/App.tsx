import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img alt="Доготип"
                     src="https://e7.pngegg.com/pngimages/646/246/png-clipart-black-white-bushido-video-games-blood-bowl-steam-stealth-game-samurai-armor.png"/>
            </header>
            <nav className="sidebar">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">

                <div>
                    <img className="content-wallpaper" alt="Пляж"
                        src="https://мойпляж.рф/wp-content/uploads/2011/05/foto-plyazhey-tailanda-3.jpg"/>
                </div>
                <div>
                    Ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        Post1
                    </div>
                    <div>
                        Post1
                    </div>

                </div>


            </div>
        </div>
    )
}

export default App;
