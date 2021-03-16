import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import BaseColourContext from '../../../context/baseColourContext';
import colours from '../jsonData/colours.json';

export default function ColourBar() {
    const handleColourChange = React.useContext(BaseColourContext).handleColourChange;
    return(
        <div className="colour-bar">
            <div className="colour-bar-array">
                {colours.map((colour,i) => {
                return (
                    <button 
                        key={i}
                        data-number={i}
                        data-colour={colour.name}
                        style={{backgroundColor: `hsla(${colour.hue},30%,100%)`}}
                        onClick={(e) => handleColourChange(e)}
                        className="colour-btn">
                    </button>
                )
            })}
            </div>
            <div className="colour-icon"><FaPaintBrush /></div>
        </div>
    )
};