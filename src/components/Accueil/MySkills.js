import "../../styles/Accueil/MySkills.css"
import Skill from "./Skill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCode, faLaptop, faCodeBranch, faP } from '@fortawesome/free-solid-svg-icons';
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
                <h3>My skills</h3>
                <div className="each-skill">
                    <Skill
                        logo={faCodeBranch}
                        title="Git Version Control"
                        description="Efficient collaboration, code management, and seamless project workflow."
                    />
                    <Skill
                        logo={faCode}
                        title="Clean code"
                        description="Efficient, organized, and easily maintainable software development."
                    />
                    <Skill
                        logo={faLaptop}
                        title="Creative design"
                        description="Turning ideas into captivating visual experiences."
                    />
                    <Skill
                        logo={faPen}
                        title="Creative design"
                        description="Turning ideas into captivating visual experiences."
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