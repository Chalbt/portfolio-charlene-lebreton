import "../../styles/Accueil/Accueil.css";
import AboutMe from "../Accueil/AboutMe";
import MySkills from "../Accueil/MySkills";
import Portfolio from "./Portfolio";

function Accueil() {
    return (
        <div className='accueil' id="home">
            <div>
                <AboutMe />
                <MySkills />
                <Portfolio />
            </div>
        </div>
    );
}

export default Accueil;