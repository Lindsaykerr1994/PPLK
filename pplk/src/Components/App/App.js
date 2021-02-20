//Dependencies
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
//Components
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';
import Biography from '../Biography/Biography';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
//Styling
import './Styles/App.css';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/biography" component={Biography} />
            <Route path="/skills" component={Skills} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
}

export default App;
