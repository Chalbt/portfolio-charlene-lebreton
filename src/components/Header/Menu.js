import { HashLink } from 'react-router-hash-link';
import "../../styles/Header.css"


function Menu() {
    
    return (
        <div className='menu-header'>
            <ul>
                <HashLink to='#home' smooth={true} duration={300}><li className='menu-item'>Home</li></HashLink>
                <HashLink to='#about' smooth={true} duration={300}><li className='menu-item'>About</li></HashLink>
                <HashLink to='#skills' smooth={true} duration={300}><li className='menu-item'>Skills</li></HashLink>
                <HashLink to='#portfolio' smooth={true} duration={300}><li className='menu-item'>Portfolio</li></HashLink>
                <HashLink to='#contact' smooth={true} duration={300}><li className='menu-item'>Contacts</li></HashLink>
            </ul>
        </div>
    );
}

export default Menu;