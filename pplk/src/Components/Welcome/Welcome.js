import React, { useState } from 'react';
import BaseColourContext from '../../Context/BaseColourContext';
import '../../Static/Welcome.css';
import '../../Static/WelcomeBackground.css';
import { NavLink } from 'react-router-dom';
import binaryText from './BinaryText';

export default function Welcome() {
    const baseColour = React.useContext(BaseColourContext).baseColour;
    const style = {
        "background-image": `linear-gradient(335deg,hsla(var(--palette-${baseColour}-20),100%),hsla(var(--palette-${baseColour}-30),100%),hsla(var(--palette-${baseColour}-40),100%),hsla(var(--palette-${baseColour}-50),100%))`
    }
    return(
        <div id="welcome-container" className={"main-container " + baseColour} style={style}>
            <NavLink to="/biography">
                <div id="portal">
                    <h1><span class="on-hover">&#60;h1&#62;</span>Lindsay Kerr<span class="on-hover">&#60;&#47;h1&#62;</span></h1>
                    <h2><span class="on-hover">&#60;h2&#62;</span>Web Development<span class="on-hover">&#60;&#47;h2&#62;</span></h2>
                </div>
            </NavLink>
        </div>
    )
};