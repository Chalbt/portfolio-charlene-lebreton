import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    
    return (
    <div className="header">
        <ul className='menu-header'>
        <li><Link to="/">About me</Link></li>
        <li><Link to="/">My skills</Link></li>
        <li><Link to="/">Porfolio</Link></li>
        <li><Link to="/">Contact</Link></li>
        </ul>
    </div>
    );
}

export default Header;