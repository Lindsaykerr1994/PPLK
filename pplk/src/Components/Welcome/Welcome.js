import React from 'react';
import {NavLink} from 'react-router-dom';
import ColourBar from '../Navbar/Subcomponents/ColourBar';
import SocialBar from '../Navbar/Subcomponents/SocialBar';
import Crest from './Subcomponents/CrestText';
import '../../Assets/Welcome.css';
import '../../Assets/WelcomeBackground.css';

export default function Welcome() {
    return(
        <div id="welcome-container" className="main-container">
            <NavLink to="/biography">
                <Crest />
            </NavLink>
            <h4>Lindsay Kerr - Web Development</h4>
            <SocialBar />
            <ColourBar />
        </div>
    )
};