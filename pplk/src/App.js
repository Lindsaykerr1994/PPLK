import React, { useState } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './static/App.css';
import './static/cssVariables.css';
import './static/navbar.css';
import colours from './components/welcome/jsonData/colours.json';

/* Import Components */
import BaseColourContext from './context/baseColourContext';
import Welcome from './components/welcome/welcome';

export default function App(){
    const [baseColour, setBaseColour] = useState("221.1,48.3%");
    const handleColourChange = (e) => {
        var index = e.currentTarget.getAttribute("data-number");
        var baseColour = colours[index]['hue'];
        var altColour = colours[index]['alt'];
        setBaseColour(baseColour);
        var root = document.documentElement;
        root.style.setProperty('--base-colour', baseColour);
        root.style.setProperty('--alt-colour', altColour)
    }
    return(
       <Router>
            <BaseColourContext.Provider value={{baseColour,handleColourChange}}>
                <Switch>
                    <Route path="/" exact component={Welcome} />
                </Switch>
            </BaseColourContext.Provider>
        </Router>
    )
}