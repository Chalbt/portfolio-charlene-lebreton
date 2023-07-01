import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skill({ logo, title, description }) {
    return (
      <div className="skills">
        <FontAwesomeIcon icon={logo} className="icon-skill" />
        <div className="skill-description">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default Skill;