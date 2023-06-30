import '../styles/Footer.css'
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone, faHashtag } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className='footer' id='contact'>
            <h3>Contacts</h3>    
            <div className='each-contact'>
            <Contact
                logo={faAt}
                title="E-mail"
                description="shah.lebreton@gmail.com"
            />
            <Contact
                logo={faPhone}
                title="Telephone number"
                description="+33 688 255 149"
            />
            <Contact
                logo={faHashtag}
                title="Social media"
                description="Description du contact 3"
            />
            </div>
        </div>
    );
  };

export default Footer;