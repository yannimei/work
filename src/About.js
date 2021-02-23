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
                                Hi, I am Yanni, an interaction designer at the Dutch National Institution of Mathematics and Computer Science. In addition, I used to work in leading user experience agencies (Bebit, 2019; designaffairs GmbH 2018), and academic research labs (Gamification Lab, TUDelft, 2019). Below is more about me :-)
                        </p>

                            <h3>From 0-1, envision to evaluation</h3>
                            <p>
                                I am experienced in designing from 0 to 1. In these projects, I walked through a coherent design process from user research, conceptualizing, prototyping, to evaluating. These projects included VR, mobile and desktop applications.
                        </p>

                            <h3>Prototyping with programming (Web & XR)</h3>
                            <p>
                                Since I am working in science institution, my design practice is always embedded in technology exploration. My focus in on XR development (C# for Unity, 3d production), and front-end development (React). I <a id="code-link" href="https://github.com/yannimei/work/tree/master" target="blank">code{"\uD83E\uDC65"}</a> this website by myself! My knowledge in coding enable me to better communicate about design visions and technology feasibility with developers.
                        </p>

                            <h3>Commercial & academic experience.</h3>
                            <p>
                                I have shipped real product in the commercial context. This experience enables me to collaborate well with product managers and efficiently deliver decent user interfaces. In addition, I am a HCI researcher with publication. Academic practices enable me to combine qualitative and quantitative methods in user tests.
                        </p>
                            <p>Feel free to contact me for more questions or collaboration opportunities.</p>
                        </div>
                    </section>
                </div>
                <div className="art-img-container">

                </div>
            </div>
        );
    }
}

export default About;