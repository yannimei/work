import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import imgself from './image/icons/imgself.png';

class About extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container">
                <div className="body">
                    <section className="header">
                        <div className="navigation">
                            <div className="yanni">Yanni Mei </div>
                            <div className="selection main">
                                <Link to='/' ><div className="work">Work</div></Link>
                                <Link to='/art'><div className="art">3D_Creative</div></Link>
                                <Link to='/about' className="active"><div className="about ">About</div></Link>
                            </div>
                        </div>
                        <div className="navigation">
                            <div className="yanni">Something about me</div>
                        </div>
                    </section>

                    <section className="about-info">
                        <div className="about-img">
                            <img src={imgself} />
                        </div>
                        <div className="about-text">
                            <p>
                                Hi! Here is Yanni! I have been living in China and am now based in the Netherlands. This experience shaped who I am and how I think. I got emotional sensitivity and good analytical thinking from Chinese education (yup, I used to be a math nerd). And in NL, I am getting more sharp, open-minded, and confident. So for now, I decide to stay in Europe, and explore more challenges, fun experience, and most importantly, myself.
                            </p>
                        </div>
                        <div className="highlight about-text">
                            <p>Feel free to contact me for more questions, and fun or challenging opportunities.</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default About;