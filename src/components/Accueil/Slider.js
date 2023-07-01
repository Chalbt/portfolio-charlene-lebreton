import React, { useEffect, useRef, useState } from 'react';
import Booki from '../../assets/booki.png';
import Sophie from "../../assets/sophie-bluel.png";
import Nina from "../../assets/nina-carducci.png";
import Kasa from "../../assets/kasa.png";
import Collapse from './Collapse';

function Slider() {
    return (
        <div className='slider-container'>
            <div className='projets'>
                <div className='each-projet'>
                    <img src={Booki} alt="Booki" />
                    <Collapse 
                    title={"Booki"}
                    content={"html css"}
                    />
                </div>
                <div className='each-projet'>
                    <img src={Sophie} alt="Booki" />
                    <Collapse 
                    title={"Sophie bluel"}
                    content={"html css"}
                    />
                </div>
                <div className='each-projet'>
                    <img src={Nina} alt="Booki" />
                    <Collapse 
                    title={"Sophie bluel"}
                    content={"html css"}
                    />
                </div>
                <div className='each-projet'>
                    <img src={Kasa} alt="Booki" />
                    <Collapse 
                    title={"Sophie bluel"}
                    content={"html css"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Slider;





