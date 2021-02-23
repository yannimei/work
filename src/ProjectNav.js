import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class ProjectNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="project-nav-container" style={this.props.style}>
                <div className="body">
                    <section className="header">
                        <div className="navigation">
                            <div className="nav-inactive"><Link to='/'>Yanni Mei</Link></div>
                            <div className="selection projectnav">
                                <div className="nav-inactive"><Link to='/'>Work</Link></div>
                                <div className="nav-inactive"> <Link to='/art'>3D_Creative</Link></div>
                                <div className="nav-inactive"><Link to='/about'>About</Link></div>
                            </div>
                        </div>
                    </section>
                    <section className="project-info">
                        <div className="project-left-text">
                            <div className="project-name">{this.props.name}</div>
                            <div className="project-type">{this.props.type}</div>
                            <div className="project-more-detail">
                            <div className="project-role">Role: {this.props.role}</div>
                            <div className="project-firm">Firm: {this.props.firm}</div>
                            <div className="project-time">Date: {this.props.time}</div>
                            </div>
                        </div>
                        <div className="project-right-img">
                            <img src={this.props.img} width={this.props.imgwidth}/>
                        </div>
                    </section>
                </div>
            </div> 
            
        );
    }

}

export default ProjectNav;