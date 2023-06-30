import "../../styles/Accueil/MySkills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCode, faLaptop, faCodeBranch } from '@fortawesome/free-solid-svg-icons';


function MySkills() {
    
    return (
        <div className='skills' id="skills">
            <h3>My skills</h3>
            <div className="liste-skills">
                <div className="each-skill">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <div className="skill-description">
                        <h4>Git Version Control</h4>
                        <p>Efficient collaboration, code management, and seamless project workflow.</p>
                    </div>
                </div>
                <div className="each-skill">
                    <FontAwesomeIcon icon={faCode} />
                    <div className="skill-description">
                        <h4>Clean code</h4>
                        <p>Efficient, organized, and easily maintainable software development.</p>
                    </div>
                </div>
                <div className="each-skill">
                    <FontAwesomeIcon icon={faLaptop} />
                    <div className="skill-description">
                        <h4>Creative Design</h4>
                        <p>Turning ideas into captivating visual experiences.</p>
                    </div>
                </div>
                <div className="each-skill">
                    <FontAwesomeIcon icon={faPen} />
                    <div className="skill-description">
                        <h4>Creative Design</h4>
                        <p>Turning ideas into captivating visual experiences.</p>
                    </div>
                </div>
            </div>
            <div className="liste-skills-code">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Node.js</p>
                <p>React</p>
            </div>
        </div>
    )
}

export default MySkills