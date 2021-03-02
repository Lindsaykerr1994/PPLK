import React from 'react';
import {NavLink} from 'react-router-dom';
import ColourBar from './Subcomponents/ColourBar';
import SocialBar from './Subcomponents/SocialBar';
import '../../Assets/Navbar.css';

export default function Navbar() {
    return(
        <nav>
            <ul className="nav-list">
                <li>
                    <NavLink to="/biography"><span className="on-hover">&#60;a&#62;</span>Biography<span className="on-hover">&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio"><span className="on-hover">&#60;a&#62;</span>Portfolio<span className="on-hover">&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <NavLink exact to="/"><span className="on-hover">&#60;a&#62;</span>Home<span className="on-hover">&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <NavLink to="/skills"><span className="on-hover">&#60;a&#62;</span>Skills<span className="on-hover">&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <NavLink to="/contact"><span className="on-hover">&#60;a&#62;</span>Contact<span className="on-hover">&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <ColourBar />
                </li>
                <li>
                    <SocialBar />
                </li>
            </ul>
        </nav>
    )
};
//<ColourBar handleColourChange={handleColourChange}/>