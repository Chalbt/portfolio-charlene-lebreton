import '../../styles/Accueil/Portfolio.css';
import Slider from './Slider';


function Portfolio() {
    return(
        <div>
            <div className='id' id='portfolio'></div>
                <div className='portfolio'>
                    <h3>Portfolio</h3>
                    <Slider />
                </div>
        </div>
    )
}

export default Portfolio