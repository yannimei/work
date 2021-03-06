import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import greet from './image/icons/greet.png'
import cake from './image/cover/cake.gif'
import ultimaker from './image/cover/ultimaker.png'
import data from './image/cover/data.png'
import { Project } from './Project';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            greet: greet,
            cake: cake,
            ultimaker: ultimaker
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container">
                <div className="body">
                    <section className="header">
                        <div className="navigation">
                                <div className="yanni active">Yanni Mei </div>
                            <div className="selection main">
                                <Link to='/' className="active"><div className="work">Work</div></Link>
                                <Link to='/art'><div className="art">3D_Creative</div></Link>
                                <Link to='/about'><div className="about ">About</div></Link>
                            </div>
                         </div>
                         <div className="navigation">
                               <div className="yanni">Experience designer </div>
                         </div>
                    </section>

                     <section className="introduction">
                            <div className="greeting">
                                <span>Hey! here</span>
                                <img className='greet-emoji' src={this.state.greet} alt='greet' />
                            </div>
                        <div className="self-dis">I am <Link to='/about'>Yanni</Link>, an experience designer at Dutch national scientific instituion (<a href="https://www.cwi.nl/" target="_blank">CWI</a>). <br />
                            I create novel experience by logically applying proper design methodology.</div>
                    </section>

                    <section className="project">
                        <Project src={cake} name="CakeVR" caption="Dual-user VR application (Oculus)" width="125%"challenge="How might we utilize VR to improve the communication efficiency for remote co-design?" link="/cakevr" />
                        <Project src={ultimaker} name="Ultimaker CuraFlow" caption="Tablet application/ Data Dashboard" challenge=" How might we achieve a high level and feeling of control for 3d printer operators' work?" link="/ultimaker" />
                        <Project src={data} name="NPS Dashboard [Commercial]" caption="Desktop application/ Business Software " challenge="How might we organize and visualize user feedback data for in-house product team?" link="/datadashboard" />
                    </section>
                    
                </div>
            </div>
            
            );
    }
}

export default Main;
