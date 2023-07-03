import '../../styles/Accueil/Portfolio.css';
import SliderComponent from './SliderComponent';


function Portfolio() {
    return(
        <div>
            <div className='id' id='portfolio'></div>
                <div className='portfolio'>
                    <h3>Portfolio</h3>
                    <SliderComponent />
                </div>
        </div>
    )
}

export default Portfolio