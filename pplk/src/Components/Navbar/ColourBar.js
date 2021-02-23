import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';

export default function ColourBar({handleColourChange}) {
    const colours = ["blue","red","yellow","green","orange","purple"];
    return(
        <div className="colour-bar">
            <div className="colour-icon"><FaPaintBrush /></div>
            <div className="colour-bar-array">
            {colours.map((colour,i) => {
                return (
                    <button 
                        key={i}
                        data-colour={colour} 
                        onClick={(e) => handleColourChange(e)}
                        className={"colour-btn "+colour}>
                    </button>
                )
            })}
            </div>
        </div>
    )
};