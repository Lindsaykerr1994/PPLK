import React from 'react';
import {NavLink} from 'react-router-dom';
import ColourBar from '../Navbar/Subcomponents/ColourBar';
import SocialBar from '../Navbar/Subcomponents/SocialBar';
import Crest from './Subcomponents/SimplifiedCrest';
import '../../Assets/Welcome.css';
import '../../Assets/WelcomeBackground.css';

export default function Welcome() {
    return(
        <div id="welcome-container" className="main-container">
            <h4>Lindsay Kerr - Web Development</h4>
            <NavLink to="/biography">
                <div id="portal">
                    <Crest />
                </div>
            </NavLink>
            <SocialBar />
            <ColourBar />
        </div>
    )
};