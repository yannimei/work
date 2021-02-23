import React from 'react';
import './App.css';
import Main from './Main';
import Art from './Art';
import About from "./About";
import Footer from './Footer';
import CakeVR from './projects/CakeVR.js';
import Ultimaker from './projects/Ultimaker.js';
//first step
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <div>
                
                <Router>
                    <Route path="/designwork/" exact component={Main} />
                    <Route path="/designwork/art" component={Art} />
                    <Route path="/designwork/about" component={About} />
                    <Route path="/designwork/cakevr" component={CakeVR} />
                    <Route path="/designwork/ultimaker" component={Ultimaker} />
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
