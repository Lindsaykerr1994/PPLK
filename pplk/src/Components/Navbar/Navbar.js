import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../Assets/Navbar.css';

export default function Navbar({posVar}) {
    var posStyle = {}
    posVar==="top" ? posStyle = {
        "top": 0,
        "backgroundColor": "hsla(var(--palette-colour-30),100%)",
        "position": "fixed"
        } : posStyle = {
        "bottom": 0,
        "backgroundColor": "transparent",
        "position": "absolute"
    }
    return(
        <nav style={posStyle}>
            <ul className="nav-list">
                <li>
                    <NavLink to="/biography">Biography</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
};
//<ColourBar handleColourChange={handleColourChange}/>