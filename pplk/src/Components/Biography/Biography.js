import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../../Assets/Biography.css';

export default function Biography() {
    return(
        <>
            <Navbar posVar="top" />
            <div className="body-container main-container">
                <h1>Biography</h1>
                <div id="about-text" className="">
                    <p>All About Me</p>
                </div>
                <div id="employment-text" className="">
                    <p>All About My Work</p>
                </div>
                <div id="education-text" className="">
                    <p>All About My Education</p>
                </div>
            </div>
        </>
    )
};