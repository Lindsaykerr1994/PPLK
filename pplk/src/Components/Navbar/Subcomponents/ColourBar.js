import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import BaseColourContext from '../../../Context/BaseColourContext';
import colours from '../jsonData/colours.json';

export default function ColourBar() {
    const handleColourChange = React.useContext(BaseColourContext).handleColourChange;
    return(
        <div className="colour-bar">
            <div className="colour-icon"><FaPaintBrush /></div>
            <div className="colour-bar-array">
                {colours.map((colour,i) => {
                return (
                    <button 
                        key={i}
                        data-colour={colour.hue}
                        style={{backgroundColor: `hsla(${colour.hue},50%,100%)`}}
                        onClick={(e) => handleColourChange(e)}
                        className="colour-btn">
                    </button>
                )
            })}
            </div>
        </div>
    )
};

/* colours.map((colour,i) => {
                return (
                    <button 
                        key={i}
                        data-colour={colour} 
                        onClick={(e) => handleColourChange(e)}
                        className={"colour-btn "+colour}>
                    </button>
                )
            }) */