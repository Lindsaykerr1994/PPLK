import React from 'react';
import {NavLink} from 'react-router-dom';
import BaseColourContext from '../../Context/BaseColourContext';
import ColourBar from './ColourBar';
import '../../Static/Navbar.css';

export default function Navbar() {
    const {baseColour,handleColourChange} = React.useContext(BaseColourContext);
    
    return(
        <nav className={baseColour}>
            <ul className="nav-list">
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/biography">Biography</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Porfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
            <ColourBar 
                handleColourChange={handleColourChange}/>
        </nav>
    )
};