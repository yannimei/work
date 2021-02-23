import React from 'react';
import './App.css';
import Main from './Main';
import Art from './Art';
import About from "./About";
import Footer from './Footer';
import CakeVR from './projects/CakeVR.js';
import Ultimaker from './projects/Ultimaker.js';
//first step
import { BrowserRouter as Router, HashRouter, Route }from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <div>
                <HashRouter>
                    <Route path="/" exact component={Main} />
                    <Route path="/art" component={Art} />
                    <Route path="/about" component={About} />
                    <Route path="/cakevr" component={CakeVR} />
                    <Route path="/ultimaker" component={Ultimaker} />
                    <Footer />
                </HashRouter>
            </div>
        );

        //return (
        //    <div>
        //        <Route path="/" exact component={Main} />
        //        <Route path="/art" component={Art} />
        //        <Route path="/about" component={About} />
        //        <Route path="/cakevr" component={CakeVR} />
        //        <Route path="/ultimaker" component={Ultimaker} />
        //        <Footer />
        //    </div>
        //);

        //return (
        //    <div>
        //        <Router basename="/work">
        //            <Route path="/" exact component={Main} />
        //            <Route path="/art" component={Art} />
        //            <Route path="/about" component={About} />
        //            <Route path="/cakevr" component={CakeVR} />
        //            <Route path="/ultimaker" component={Ultimaker} />
        //            <Footer />
        //        </Router>
        //    </div>
        //);
    }
}

export default App;
