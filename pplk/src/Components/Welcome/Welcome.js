import React, { useState } from 'react';
import BaseColourContext from '../../Context/BaseColourContext';
import '../../Static/Welcome.css';

export default function Welcome() {
    const baseColour = React.useContext(BaseColourContext).baseColour;
    return(
        <div id="welcome-container" className={"main-container " + baseColour}>
            <h1>Welcome</h1>
        </div>
    )
};