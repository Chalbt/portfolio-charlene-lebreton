import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Booki from '../../assets/booki.png';
import Sophie from "../../assets/sophie-bluel.png";
import Nina from "../../assets/nina-carducci.png";
import Kasa from "../../assets/kasa.png";

const images = [
  { src: Booki, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

},
  { src: Sophie, text: 'Texte pour l\'image 2' },
  { src: Nina, text: 'Texte pour l\'image 3' },
  { src: Kasa, text: 'Texte pour l\'image 4' },
];

function SliderComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliderReady, setIsSliderReady] = useState(false);

  useEffect(() => {
    setIsSliderReady(true);
  }, []);

  const handleBeforeChange = (current, next) => {
    setActiveIndex(next);
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
  };

  return (
    <div className="slider-container">
      {isSliderReady && (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`each-projet ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={image.src} alt={`Image ${index}`} />
              {activeIndex === index && <p>{image.text}</p>}
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SliderComponent;