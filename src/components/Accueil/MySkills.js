import "../../styles/Accueil/MySkills.css"
import Skill from "./Skill";
import { faCode, faLaptop, faCodeBranch, faPen } from '@fortawesome/free-solid-svg-icons';
import HtmlImage from "../../assets/html.png";
import CssImage from "../../assets/css.png";
import JsImage from "../../assets/js.png";
import ReactImage from '../../assets/react.png';
import NodeImage from "../../assets/node-js.png";
import MongoDbImage from "../../assets/mongodb.png";



function MySkills() {
    
    return (
        <div>
            <div className='id' id="skills"></div>
            <div className='myskills'>
                <h3>Skills</h3>
                <div className="each-skill">
                    <Skill
                        logo={faCodeBranch}
                        title="Git Version Control"
                        description="Proficient in version control and collaboration using Git for web development."
                    />
                    <Skill
                        logo={faCode}
                        title="SEO"
                        description="Skilled in implementing SEO strategies and optimizing websites for search engines."
                    />
                    <Skill
                        logo={faLaptop}
                        title="Responsive design"
                        description="Proficient in creating responsive designs that ensure optimal user experience across various devices and screen sizes."
                    />
                    <Skill
                        logo={faPen}
                        title="Creative design"
                        description="Skilled in creative design, leveraging artistic flair and innovative thinking to deliver visually captivating and engaging digital experiences."
                    />
                </div>
                <div className="liste-skills-code">
                    <img className="skill-image" src={HtmlImage} alt="html"/>
                    <img className="skill-image" src={CssImage} alt="css"/>
                    <img className="skill-image" src={JsImage} alt="js"/>
                    <img className="skill-image" src={ReactImage} alt="react"/>
                    <img className="skill-image" src={NodeImage} alt="node"/>
                    <img className="skill-image" src={MongoDbImage} alt="mongDb"/>
                </div>
            </div>
        </div>
    )
}

export default MySkills