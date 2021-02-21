//Dependencies
import React, { useState } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
//Components
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';
import Biography from '../Biography/Biography';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
//Context 
import BaseColourContext from '../../Context/BaseColourContext';
//Styling
import '../../Static/App.css';
import '../../Static/CSS-Vars.css';

function App() {
    const [baseColour, setBaseColour] = useState("blue");
    const handleColourChange = (e) => {
        var newColour = e.currentTarget.getAttribute("data-colour");
        setBaseColour(newColour);
    }
  return (
    <Router>
        <BaseColourContext.Provider value={({baseColour,handleColourChange})}>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/biography" component={Biography} />
                <Route path="/skills" component={Skills} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BaseColourContext.Provider>
    </Router>
  );
}

export default App;
