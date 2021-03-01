import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiBuymeacoffee } from 'react-icons/si';


export default function SocialBar(){
    return (
        <div className="social-bar">
            <button className="social-button"><FiGithub /></button>
            <button className="social-button"><FaLinkedinIn /></button>
            <button className="social-button"><SiBuymeacoffee /></button>
        </div>
    )
}