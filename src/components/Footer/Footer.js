import '../../styles/Footer.css'
import Contact from './Contact';
import { faAt, faMobileScreenButton, faHashtag } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div>
            <div className='id' id='contact'></div>
            <div className='footer'>
                <h3>Contacts</h3>
                <div className='each-contact'>
                    <Contact
                        logo={faAt}
                        title="E-mail"
                        description="shah.lebreton@gmail.com"
                    />
                    <Contact
                        logo={faMobileScreenButton}
                        title="Telephone number"
                        description="+33 688 255 149"
                    />
                    <Contact
                        logo={faHashtag}
                        title="Social media"
                        description={<a href="https://github.com/Chalbt">My GitHub profil</a>}
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;