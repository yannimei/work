import React from 'react';
import './App.css';
import github from './image/icons/github.png';
import linkedin from './image/icons/linkedin.png';
import instagram from './image/icons/instagram.png';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            github: github,
            linkedin: linkedin,
            instagram: instagram

        };
    }
    render() {
        const date = new Date();
        const year = date.getFullYear();

        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="social">
                        <div className="icon">
                            <a href=" " target="_blank" rel="noopener noreferrer">
                                <img className="github" src={this.state.github} alt="github Logo" />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/yanni-mei-5a9488181/" target="_blank" rel="noopener noreferrer">
                                <img className="linkedin" src={this.state.linkedin} alt="linkedin Logo" />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/ymei_3dimension/" target="_blank" rel="noopener noreferrer">
                                <img className="instagram" src={this.state.instagram} alt="instagram Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="footerText">
                        © YanniMei {year} - Built with <a href="https://reactjs.org/docs/hello-world.html" target="_blank">React.js</a>, Source code at <a href="" target="_blank">GitHub</a>
                     </div>
                 </div>
            </div>
            );
    }
    
}
export default Footer;