import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../ProjectNav';
import '../App.css';
import AllWorks from '../AllWorks';

import img00 from '../image/mediascape/img00.png';
import img01 from '../image/mediascape/img01.jpg';
import img02 from '../image/mediascape/img02.png';
import img03 from '../image/mediascape/img03.png';
import img04 from '../image/mediascape/img04.png';
import img05 from '../image/mediascape/img05.jpg';
import img06 from '../image/mediascape/img06.png';
import img07 from '../image/mediascape/img07.png';
import img08 from '../image/mediascape/img08.png';
import img09 from '../image/mediascape/img09.png';
import img10 from '../image/mediascape/img10.png';
import img11 from '../image/mediascape/img11.png';
import img12 from '../image/mediascape/img12.png';
import img13 from '../image/mediascape/img13.jpg';


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
                            <div className="content-text">We created a SocialVR application,enabling remote friends to co-visit the virtual NISV museum. Additionally, in the virtual world, they can directly interact with an iconic but untouchable artefact: the costume of Jerney Kaagman who was a top Dutch pop star.
                            </div>
                            <div className="content-figure">
                                <img className="shrink-img img-shadow" src={img01} />
                            </div>

                            <div className="content-text">
                                <br></br><br></br>
                                This video showcased the technical mechanism of hologram, research and design process, as well as experience flow of Mediascape XR.
                                <br></br><br></br>
                            </div>

                            <div className="content-figure">
                                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/2L94Ub4pDYI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <br></br><br></br><br></br>

                            <div className="content-title">Project Procedure</div>
                            <div className="content-text"> If you are interested in more details, below is the more detailed research and design practices of the project 
                                <ul>
                                    <li>Exploratory research with museum curators and museum lovers</li>
                                    <li>Define Design Requirements</li>
                                    <li>Design, Prototype and Iterate</li>
                                    <li>First-round User Test & Final Iteration</li>
                                    <li>Public Demonstration in VRDays2021</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="research grey">
                        <div className="body">
                            <div className="content-title">step1: user research</div>

                            <div className="content-title-second">Focus Group With Curators</div>
                            <div className="content-text"><b>RQ:</b> What is the criteria for the ideal museum artefact for Metaverse museum experience?</div>
                            <br></br>
                            <div className="content-text"><b>Method:</b> To answer this question, three museum curators were invited for a focus group. We created:
                                <ul>
                                    <li><i>Senstizing Booklet:</i> enabling them to reflect on their curator work and get more inspired and prepared for formal discussion.</li>
                                    <li><i>Co-creative session on online Whiteboard:</i> inspiring them to ideate their dream VR exhibition for NISV museum.</li>
                                </ul>
                            </div>
                            <div className="content-figure">
                                <img className="shrink-img" src={img02} />
                            </div>
                            <div className="content-figure">
                                <img className="shrink-img " src={img03} />
                            </div>
                            <div className="content-text"><b>Results: </b>The audio was recorded and transcripted, then a thematic analysis was conducted, we found out that
                                <ul>
                                    <li>VR makes much more sense to a <u>vulnerable</u> museum piece which is untouchable in the real life.</li>
                                    <li>It should involve <u>popular</u> Dutch media culture (i.e., music, TV industry) to attract more visitors and provoke more conversation.</li>
                                    <li>It should allow more possibilities of <u>fun interaction.</u></li>
                                </ul>
                            </div>
                            <div className="content-text">Based on the results and documents of museum collection, <b>the costume of Jernery Kaagman (JK)</b> was finally selected.
                            </div>

                            <br></br><br></br>
                            
                            <div className="content-title-second">Co-creative Sessions With Museum Lovers</div>
                            <div className="content-text">With the first decision made, we wanted to collect more creative ideas about SocialVR museum experience, thus, we invited five museum lovers to an offline co-creative session. Here, we have two research questions:
                            </div>
                            <br></br>
                            <div className="content-text"><b>RQ1:</b> What is the ideal interaction between VR users and virtual costume?</div>
                            <div className="content-text"><b>RQ2:</b> What is the ideal social interaction between remote VR users?</div>
                            <div className="content-figure">
                                <img className="shrink-img" src={img04} />
                            </div>
                            
                            <br></br>
                            <div className="content-text"><b>Results:</b> All the nice ideas are collected and grouped into several categories, such as "Exploratory" and "Participatory". Then they are synthesised into requirements for key interaction. 
                                 <div className="content-figure">
                                    <img className="shrink-img" src={img05} />
                                 </div>
                                <ul>
                                    <li>People want to wear the costume is very close-up interaction that is impossible in the real word.</li>
                                    <li>People want to relive and re-interpret its historical context.</li>
                                    <li>People want more collaborative and creative tasks.</li>
                                    <li>People need some independent exploration, which is similar to the real word museum tour.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    <section className="define grey">
                        <div className="body">
                            <div className="content-title">step 2: define design requirements</div>
                            <div className="content-text">With the thematic analysis, we generated a list of design requirements <i>(e.g.,The experience should assign the visitors with a collaborative task on recreating or replicating the musical performance).</i> With the design requirements, we generate the storyboard to illustrate the user journey, and set up the system overview to identify the necessary assets in the Metaverse app.
                            </div>
                            <div className="content-figure">
                                <img className="full-img" src={img06} />
                            </div>
                            <div className="content-figure">
                                <img className="full-img" src={img07} />
                            </div>
                        </div>
                    </section>

                    
                    <section className="design grey">
                        <div className="body">
                            <br></br><br></br>
                            <div className="content-title">step3: Design, Prototype and Iterate</div>
                            <div className="content-text">We try to involve our stakeholders along the design process. We create a low-fi VR prototype and a video demo, and share design ideas in online sessions.
                            </div>
                            <div className="content-figure">
                                <img className="full-img" src={img08} />
                            </div>
                            <div className="content-text">I create 2D and 3D assets, as well as front-end XR development with Unity3D (C#), collaborating with the back-end developer on Git and Kanban (Very effective tool for me as a designer). 
                            </div>
                            <div className="content-figure">
                                <img className="full-img" src={img09} />
                            </div>
                        </div>
                    </section>

                    <section className="test grey">
                        <div className="body">
                            <div className="content-title">step4: User Test </div>
                            <div className="content-text">With the finalized prototype, we decided to conduct user tests to see:
                            </div>
                            <div className="content-text"><b>RQ1:</b> What are usability and user experience of the Mediascape App?
                            </div>
                            <div className="content-text"><b>RQ2:</b> How good is the museum learning experience of the Mediascape App?
                            </div>
                            <br></br><br></br>

                            <div className="content-title-second">Method</div>
                            <div className="content-text">We conducted the user tests with 18 participants as 9 pairs in 9 VR sessions. Each pair of participants know each other.We mimicked the remote context by placing the two participants to two separated rooms.  
                            </div>
                            <div className="content-figure">
                                <img className="full-img" src={img10} />
                            </div>
                            <div className="content-text">I design the experiment setup and process, and visualise it to share ideas with my team members for moderating the test together.
                            </div>
                            <div className="content-figure">
                                <img className="shrink-img" src={img11} />
                            </div>
                            <div className="content-figure">
                                <img className="shrink-img" src={img12} />
                            </div>

                            <div className="content-title-second">Result</div>
                            <div className="content-text">
                                <ul> 
                                    <li>We should create more guided, informed virtual world experience, with clearer route guidance and Call-To-Action (CTA).</li>
                                    <li>We should improve the usability of using VR controllers.</li>
                                    <li>We understand the similarity and difference of the social behaviour pattern in the real and VR world.</li>
                                    <li>The novelty of VR experience might eclipse education value.</li>
                                </ul>
                            </div>
                            <br></br><br></br>
                        </div>
                    </section>

                    <section className="vrdays grey">
                        <div className="body">
                            <div className="content-title">step5: Public Demonstration in VRDays2021</div>
                            <div className="content-figure">
                                <img className="full-img" src={img13} />
                            </div>
                            <div className="content-text">This prototype was showcased in VRDays Europe 2021, and selected as the iconic project being displayed on the main stage. Over 150 visitors tried that, from kids to CTO! This is the first time I thought how much impact I could have to make people get to know SocialVR and reflect on it.
                            </div>
                        </div>
                        <br></br><br></br><br></br><br></br>
                    </section>

                </div>
    
                <AllWorks selected="zero" />

            </div>
            
        )
    }

}

export default Mediascape;