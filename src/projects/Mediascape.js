import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../ProjectNav';
import '../App.css';
import AllWorks from '../AllWorks';

import img00 from '../image/mediascape/img00.png';
import img01 from '../image/mediascape/img01.jpg';

const style = {
    styleTitle: {
        background: '#000'
    },

}

class Mediascape extends React.Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="mediascape">
                <ProjectNav style={style.styleTitle} name="Mediascape" type="SocialVR App | Cultural Heritage" time="2020.11-2021.011" role="UX Researcher | Designer | Front-end Developer" firm="Netherlands Institute for Sound and Vision" />

                <div className="project-content">
                    <section className="challenge white">
                        <div className="body">
                            <div className="content-title-close-to-text">background</div>
                            <div className="content-text">Imagine you are in London while your friend is living in Paris, but now you hope to visit a museum in Amsterdam together, that's so difficult! This is how MediascapeXR makes a difference! Mediascape is a Public-Private Partnership Project, mainly in conjunction with the <a href="https://www.beeldengeluid.nl/en" target="_blank">Netherlands Institute of Sound and Vision (NISV)</a>, and <a href="https://www.clicknl.nl/" target="_blank">CLICKNL</a>.This application was demostrated in <a href="https://vrdays.co/exhibition-2021/" target="_blank">VRDays 2021</a>, and have it experienced with over 150 users (from little kids to CTO :p). Below is the promotion video (For the first time I got interviewed in the Netherlands ;) So fun!!!) 
                            </div>
                            
                            <div className="content-figure">
                                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/I7kY1cMZyD0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div className="content-title-close-to-text">Goal</div>
                            <div className="content-text">Create a shared and immersive access to cultural heritage for remote friends.</div>

                            <div className="content-title-close-to-text">Task</div>
                            <div className="content-text">I took the lead of the user research, interaction design and front-end XR development, and user test process. Also, as the project lead, I planned the project and coordinated the cross-functionall stakeholders.</div>

                            <div className="content-title-close-to-text">Outcome</div>
                            <div className="content-text">We created a SocialVR application,enabling remote friends to co-visit the virtual NISV museum. Additionally, in the virtual world, they can directly interact with an iconic but untouchable collection: the costume of Jerney Kaagman who was a top Dutch pop star.
                            </div>
                            <div className="content-figure">
                                <img className="shrink-img img-shadow" src={img01} />
                            </div>

                            <div className="content-text">
                                <br></br><br></br>
                                Below is the research and design process, as well as the experience showcase of Mediascape.
                                <br></br><br></br>
                            </div>

                            <div className="content-figure">
                                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/2L94Ub4pDYI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            
                            
                        </div>
                    </section>
                </div>

                <AllWorks selected="zero" />

            </div>
            
        )
    }

}

export default Mediascape;