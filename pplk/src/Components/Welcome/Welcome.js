import React from 'react';
import BaseColourContext from '../../Context/BaseColourContext';
import Navbar from '../Navbar/Navbar';
import ColourBar from '../Navbar/Subcomponents/ColourBar';
import SocialBar from '../Navbar/Subcomponents/SocialBar';
import Crest from './Subcomponents/Crest';
import '../../Assets/Welcome.css';
import '../../Assets/WelcomeBackground.css';

export default function Welcome() {
    const baseColour = React.useContext(BaseColourContext).baseColour;
    return(
        <div id="welcome-container" className="main-container">
            <Navbar posVar="bottom"/>
            <div id="portal">
                <Crest 
                    hue={baseColour}/>
                <h1><span className="on-hover">&#60;h1&#62;</span>Lindsay Kerr<span className="on-hover">&#60;&#47;h1&#62;</span></h1>
                <h2><span className="on-hover">&#60;h2&#62;</span>Web Development<span className="on-hover">&#60;&#47;h2&#62;</span></h2>
            </div>
            <ColourBar />
            <SocialBar styling={{
                "position": "fixed",
                "top": "0px",
                "left": "0px"
            }}/>
        </div>
    )
};