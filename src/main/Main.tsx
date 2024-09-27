import React from 'react';

const Main = () => {
    return (
        <main className="content">
            <div>
                <img className="content-wallpaper"
                     src="https://img.goodfon.ru/wallpaper/nbig/b/6d/gory-ozero-rybalka-lesa.webp"/>
            </div>
            <div>
                <img className='avatar' src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/>
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
    );
};

export default Main;