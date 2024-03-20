import React from 'react';
import './Profile.css'

export const Profile = () => {
    return (
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
    );
};

