import React from 'react';

export const Header = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://avatars.mds.yandex.net/i?id=9e935d9a791083dc250d6a14801ab3aa91a94759-6945470-images-thumbs&n=13"/>
            </header>
            <nav className="sidebar">
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Setting</a></li>
                </ul>
            </nav>
            <main className="content">
                <div>
                    <img src="https://w.forfun.com/fetch/15/156ad05906b325f230f0291d5aeaa1fa.jpeg"/>
                </div>
                <div>
                    <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/>
                    <h2>post title</h2>
                    <p>description</p>
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>

                </div>

            </main>

        </div>
    )
}