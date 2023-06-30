import React from 'react';
import { HashLink } from 'react-router-hash-link';
import BackgroundImage from "../assets/image-background.jpg";
import "../styles/Header.css";


function Header() {
    
    return (
    <div className="header">
        <div className="background-img" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        </div>
        <div className='header-content'>
            <div className='menu-header'>
                <ul>
                    <HashLink to='#home' smooth={true} duration={300}><li className='menu-item'>Home</li></HashLink>
                    <HashLink to='#skills' smooth={true} duration={300}><li className='menu-item'>My skills</li></HashLink>
                    <HashLink to='#portfolio' smooth={true} duration={300}><li className='menu-item'>Portfolio</li></HashLink>
                    <HashLink to='#contact' smooth={true} duration={300}><li className='menu-item'>Contacts</li></HashLink>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Header;