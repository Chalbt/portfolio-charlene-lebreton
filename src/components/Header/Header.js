import React from 'react';
import BackgroundImage from "../../assets/image-background.jpg";
import "../../styles/Header.css"
import Menu from './Menu';


function Header() {
    
    return (
    <div className="header" id='home'>
        <div className="background-img" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        </div>
        <div className='header-content'>
            <div>
                <Menu />
            </div>
            <div className='header-text'>
                <h4>Hi there !</h4>
                <h1>My name is Charlène and I am a passionate front-end developer with a keen eye for UI Design.</h1>
            </div>
        </div>
    </div>
    );
}

export default Header;