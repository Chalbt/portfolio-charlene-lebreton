import '../../styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact({ logo, title, description }) {
    return (
      <div className="contact">
        <FontAwesomeIcon icon={logo} className="contact-logo" />
        <h4 className="contact-title">{title}</h4>
        <p className="contact-description">{description}</p>
      </div>
    );
  };
  
  export default Contact;