import React from 'react';
import ShieldLink from './subcomponents/shieldLink';
import ColourBar from './subcomponents/colourBar';
import '../../static/welcome.css';

export default function Welcome(){
    return (
        <div id="welcomeContainer">
            <ShieldLink 
                libName = "Fa"
                iconName = "FaUser"
                fontSize = "48px"
            />
            <ShieldLink 
                libName = "Gi"
                iconName = "GiBookmark"
                fontSize = "64px"
            />
            <ShieldLink  
                libName = "Gi"
                iconName = "GiFluffyWing"
                fontSize = "120px"
            />
            <ShieldLink  
                libName = "Vsc"
                iconName = "VscTools"
                fontSize = "64px"
            />
            <ShieldLink  
                libName = "Bi"
                iconName = "BiPaperPlane"
                fontSize = "48px"
            />
        </div>
    )
}