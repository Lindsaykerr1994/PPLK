import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../Static/Navbar.css';

export default function Navbar() {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/biography">Biography</NavLink>
            <NavLink to="/portfolio">Porfolio</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
};