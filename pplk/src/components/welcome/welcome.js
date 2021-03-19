import React from 'react';
import ShieldLink from './subcomponents/shieldLink';
import ColourBar from './subcomponents/colourBar';
import '../../static/welcome.css';

export default function Welcome(){
    return (
        <div id="welcomeContainer">
            <ShieldLink 
                iconLib = "Fa"
                iconName = "Code"
            />
            <ShieldLink 
                iconLib = "Bs"
                iconName = "Code"
            />
            <ShieldLink  
                iconLib = "Bs"
                iconName = "Code"
            />
            <ShieldLink  
                iconLib = ""
                iconName = "Code"
            />
            <ShieldLink  
                iconLib = ""
                iconName = "Code"
            />
        </div>
    )
}