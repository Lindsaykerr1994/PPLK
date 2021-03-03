import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';


export default function SocialBar({styling}){
    console.log(styling)
    var posStyle = styling;
    console.log(posStyle)
    return (
        <div className="social-bar" style={posStyle}>
            <button className="social-button">
                <a href="https://github.com/Lindsaykerr1994" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </button>
            <button className="social-button">
                <a href="https://www.linkedin.com/in/lindsay-kerr-9a8445185/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </button>
            <button className="social-button">
                <a href="https://www.buymeacoffee.com/GrizzlyWD" target="_blank" rel="noopener noreferrer"><SiBuymeacoffee /></a>
            </button>
        </div>
    )
}