import React from 'react';
import BaseColourContext from '../../Context/BaseColourContext';
import '../../Assets/Welcome.css';
import '../../Assets/WelcomeBackground.css';
import { NavLink } from 'react-router-dom';
import Crest from './Subcomponents/Crest';

export default function Welcome() {
    const baseColour = React.useContext(BaseColourContext).baseColour;
    return(
        <div id="welcome-container" className={"main-container "}>
            <NavLink to="/biography">
                <div id="portal">
                    <Crest 
                        hue={baseColour}/>
                    <h1><span class="on-hover">&#60;h1&#62;</span>Lindsay Kerr<span class="on-hover">&#60;&#47;h1&#62;</span></h1>
                    <h2><span class="on-hover">&#60;h2&#62;</span>Web Development<span class="on-hover">&#60;&#47;h2&#62;</span></h2>
                </div>
            </NavLink>
        </div>
    )
};