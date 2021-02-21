import React from 'react';

export default function ColourBar({handleColourChange}) {
    const colours = ["blue","red","yellow","green","orange","purple"];
    return(
        <div className="colour-bar">
        {colours.map((colour,i) => {
            return (
                <button 
                    data-colour={colour} 
                    onClick={(e) => handleColourChange(e)}
                    className={"colour-btn "+colour}>
                </button>
            )
        })}
        </div>
    )
};