import React from 'react';
import ShieldLink from './subcomponents/shieldLink';
import ColourBar from './subcomponents/colourBar';
import '../../static/welcome.css';

export default function Welcome(){
    return (
        <div id="welcomeContainer">
            <ShieldLink 
                title = "Bio"
            />
            <ShieldLink 
                title = "Portfolio"
            />
            <ShieldLink 
                title = "Welcome"
            />
            <ShieldLink 
                title = "Skills"
            />
            <ShieldLink 
                title = "Contact"
            />
            <ColourBar />
        </div>
    )
}