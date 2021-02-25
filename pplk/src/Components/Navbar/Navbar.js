import React from 'react';
import {NavLink} from 'react-router-dom';
import BaseColourContext from '../../Context/BaseColourContext';
import ColourBar from './ColourBar';
import '../../Static/Navbar.css';

export default function Navbar() {
    const {baseColour,handleColourChange} = React.useContext(BaseColourContext);
    
    return(
        <nav>
            <ul className="nav-list">
                <li>
                    <NavLink to="/biography"><span>&#60;a&#62;</span>Biography<span>&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio"><span>&#60;a&#62;</span>Portfolio<span>&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <NavLink exact to="/"><span>&#60;a&#62;</span>Home<span>&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <NavLink to="/skills"><span>&#60;a&#62;</span>Skills<span>&#60;&#47;a&#62;</span></NavLink>
                </li>
                <li>
                    <NavLink to="/contact"><span>&#60;a&#62;</span>Contact<span>&#60;&#47;a&#62;</span></NavLink>
                </li>
            </ul>
        </nav>
    )
};
//<ColourBar handleColourChange={handleColourChange}/>