import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../ProjectNav';
import '../App.css';
import AllWorks from '../AllWorks';

import img00 from '../image/cakevr/img00.png';
import img01 from '../image/cakevr/img01.png';
import img02 from '../image/cakevr/img02.png';
import img03 from '../image/cakevr/img03.png';
import img04 from '../image/cakevr/img04.png';
import img05 from '../image/cakevr/img05.png';
import img06 from '../image/cakevr/img06.png';
import img07 from '../image/cakevr/img07.gif';
import img08 from '../image/cakevr/img08.png';
import img09 from '../image/cakevr/img09.png';
import img10 from '../image/cakevr/img10.gif';
import img11 from '../image/cakevr/img11.gif';
import img12 from '../image/cakevr/img12.gif';
import img13 from '../image/cakevr/img13.gif';
import img14 from '../image/cakevr/img14.png';
import img15 from '../image/cakevr/img15.png';
import img16 from '../image/cakevr/img16.png';


const style = {
    styleTitle:{
        background: '#370617'
    },
    styleRecgonition: {
        background: '#6a040f'
    }
    
}



class CakeVR extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            design1: 'activeToggle',
            design2: 'inactiveToggle',
            design3: 'inactiveToggle',
            opt1: 'activeButton',
            opt2: 'inactiveButton',
            opt3: 'inactiveButton',
        };

        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleClick (event) { 
        if (event.target.classList[0] === 'opt1') {
            this.setState(
                {
                    design1: 'activeToggle',
                    design2: 'inactiveToggle',
                    design3: 'inactiveToggle',
                    opt1: 'activeButton',
                    opt2: 'inactiveButton',
                    opt3: 'inactiveButton',
                }
            );
        }

        if (event.target.classList[0] === 'opt2') {
            this.setState(
                {
                    design1: 'inactiveToggle',
                    design2: 'activeToggle',
                    design3: 'inactiveToggle',
                    opt1: 'inactiveButton',
                    opt2: 'activeButton',
                    opt3: 'inactiveButton',
                }
            );
        }
        if (event.target.classList[0] === 'opt3') {
            this.setState(
                {
                    design1: 'inactiveToggle',
                    design2: 'inactiveToggle',
                    design3: 'activeToggle',
                    opt1: 'inactiveButton',
                    opt2: 'inactiveButton',
                    opt3: 'activeButton',
                }
            );
        }
    }

    render() {
        return (
            <div className="cakevr">
                <ProjectNav style={style.styleTitle} name="Cake VR" type="Dual-user VR Application (Oculus)" time="2020.02-2020.08" role="Independent Work" firm="The Dutch National Institution of Mathematics and Computer Science" img={img12} imgwidth="150%"/>

                <div className="project-content cakevr">
                    <section className="recognition grey" style={style.styleRecgonition}>
                        <div className="body">
                            <div className="content-title">Recognition</div>
                            <div className="content-text">This is a European Union funded project,
                                and is accepted as a full academic paper by ACM CHI 2021 (Tier-1 HCI conference, acceptance is about 25% ).</div>
                        </div>
                    </section>

                    <section className="summary grey">
                        <div className="body">
                            <div class="summary-content">
                                <div class="column content-text">
                                    <div className="content-title-second">Task</div>
                                    In this project, I design, develop and evaluate Cake_VR, 
                                    a VR-aided collaboration application for remotely co-designing cakes.
                                </div>
                                <div class="column content-text">
                                    <div className="content-title-second">Contribution</div>
                                        <li>I conducted user research and transfer the results to design opportunities.</li>
                                        <li>I independently developed a standalone medium fidelity VR prototype.</li>
                                        <li>I conducted VR tests to evaluate the prototype in terms of functionality and experience.</li>
                                </div>
                            </div>

                            <div className="content-title-second divide">Project Workflow</div>
                            <div className="content-figure">
                                <img className="full-img" src={img16}  />
                            </div>

                        </div>
                    </section>

                    <section className="background lightgrey">
                        <div className="body">
                            <div className="content-title">background</div>
                            <div className="content-title-second">SocialVR Empowers Co-design, Cake as the Use Case</div>
                            <div className="content-text">This is a scientific project funded by EU VRTogether,
                                aiming to explore the potential of <strong>VR</strong> in remote collaborative and social interaction.
                                In this project, I aimed to explore <strong>how VR is able to support remote co-design practices in the customization cake retail context.</strong></div>
                        </div>
                    </section>

                    <section className="problem white">
                        <div className="body">
                            <div className="content-title">problem</div>
                            <div className="content-title-second">The Need for Communicating 3D and Aesthetic Information</div>
                            <div className="content-text">Currently,  the remote co-design activities are limited to screen based communication tools (i.e., whatsapp, skype, Miro). Thus, communicating about 3d and visual graphic information might be a challenge. 
                            </div>
                            <br />
                            <div className="content-text">Take the cake as an example, communicating the decoration and size of a customized cake is a tough task between cake maker and clients. As you can see, there is always a big gap between verbal description by the clients (a), reference or expectation by the clients(b), and real cake outcome (c,d). 
                            </div>

                            <div className="content-figure">
                                <img className="shrink-img img-shadow" src={img00}/>
                            </div>
                        </div>
                    </section>

                    <section className="challenge grey">
                        <div className="body">
                            <div className="content-title-second">Design Challenge</div>
                            <div className="content-text">
                                <li>How might we improve the communication efficiency for remote co-design?</li>
                                <li>Beside fixing the current problem, what is the added value of VR for remote co-design?</li>
                             </div>
                        </div>
                    </section>

                    <section className="research white">
                        <div className="body">
                            <div className="content-title">User research</div>
                            <div className="content-title-second divide">Context Inquiry + Thematic Analysis</div>
                            <div className="content-text">I conducted 9 context inquiries with five pastry chefs and four clients. Then, their remarks were transcripted for the thematic analysis.
                            </div>

                            <div className="content-title-second divide">Result 1: 3-Step Communication workflow</div>
                            <div className="content-text">The first decision indicates how clients and bakers communicate to make design decisions. They are divided into three phases, as shown below.</div>
                            <div className="content-figure">
                                <img src={img01} className="shrink-img" />
                            </div>

                            <div className="content-info-block block-lightgrey">
                                <div className="content-title-third">Step1: CLIENT INPUT</div>
                                <div className="content-text">The communication starts with client inputs. In this phase, clients express their ideas to the cake maker, based on the emotion they would convey via this cake, or the celebration context, or, the desired appearance of the cake. They often <b>utilize reference images to convey their ideas.</b></div>
                                <div className="quotation">"Some clients showed me a collection of cake pictures and told me, `I like the topping of this cake and decoration of that cake.' Then, we combined them into a new cake."</div>
                            </div>

                            <div className="content-info-block block-lightgrey">
                                <div className="content-title-third ">Step2: IDEATION & NEGOTIATION</div>
                                <div className="content-text">Then, cake makers and clients <b>develop the design idea based on various media from 2D to 3D, digital to physical (i.e,, picture, dummy, hand sketch).</b> Cake makers and clients adapt some reference design templates, combine existing design elements, or create something from scratch.</div>
                                <div className="quotation">"The pattern I drew on our wedding invitation is composed of colorful triangles, so I want to apply this pattern to the wedding cake also."</div>
                            </div>

                            <div className="content-info-block block-lightgrey">
                                <div className="content-title-third">Step3: AGREEMENT</div>
                                <div className="content-text">Finally, the client and cake maker reach an agreement on the final decision. <b>All the decision details are then documented</b> into a digital or physical contract.</div>
                                <div className="quotation">"We collect requirements [from the clients] in a PDF with the details of everything that we need to produce and deliver, and then share with them by email."</div>
                            </div>


                            <div className="content-title-second divide">Result 2: Design requirement</div>
                            <div className="content-text">
                                The second result is 8 design requirements which are aimed to support the 3 phases of the co-design process mentioned in the Result 1.
                            </div>
                            <div className="content-figure">
                                <img src={img02} className="shrink-img" />
                            </div>

                        </div>
                    </section>

                    <section className="design lightgrey">
                        <div className="body">
                            <div className="content-title">Design</div>

                            <div className="content-title-second">Storyboard</div>
                            <div className="content-text">Based on the design requirements, we made a storyboard to describe the core functions and user scenarios of CakeVR, from preparation, initial idea discussion, ideation and negotiation to confirmation.
                            </div>
                            <div className="content-figure">
                                <img src={img03} className="full-img" />
                            </div>

                            <div className="content-title-second divide">System Overview</div>
                            <div className="content-text">The system overview was built up for supporting the ideal virtual co-design process represented in the storyboard. The system offers: 
                                <ul>
                                    <li>The virtual co-design space can switch between a virtual bakery and a celebration location.</li>
                                    <li>Two users who are represented as cartoon-like avatars meet at the virtual space wearing head-mounted displays (HMDs).</li>
                                    <li>The virtual space has a graphical interface to guide them to build a 3D virtual cake together.</li>
                                    <li>The cake design is visualized in real time.</li>
                                </ul>
                            </div>
                            <div className="content-figure">
                                <img src={img04} className="full-img" />
                            </div> 

                            <div className="content-title-second divide">VR Interaction Details</div>
                            <div className="content-text">In specific, I designed the  (1) 3d physical manipulation, (2) VR controller interaction and (3) primitive wireframe of user interface, for easy use and fun experience.  
                            </div>

                            <div className="toggleBar">
                                <div className={`opt1 toggleButton ${this.state.opt1}`} onClick={this.handleClick}>3D Operation</div>
                                <div className={`opt2 toggleButton ${this.state.opt2}`} onClick={this.handleClick}>Controller Input</div>
                                <div className={`opt3 toggleButton ${this.state.opt3}`} onClick={this.handleClick}>User Interface</div>
                            </div>

                            <div className={`toggleInfo ${this.state.design1}`}>
                                <div className="content-figure">
                                    <img src={img09} className="shrink-img"  />
                                </div>
                                <div className="toggle-show-info">I did research on the literature about gesture-based 3d operation commands, and then adapted them. Finally, I came up with a set of simple gestural grammar for the basic 3d manipulations: translation, rotation, scaling (x-y axis, z axis).
                            </div>
                            </div>
                            <div className={`toggleInfo ${this.state.design2}`}>
                                <div className="content-figure">
                                    <img src={img10} width="60%" />
                                </div>
                                <div className="toggle-show-info">The layout of buttons on VR controllers could be a huge cognitive burden for first-time users. Thus, I try to make it as simple as possible. 'B' button is for UI inputs, 'A' button for 3d drawing and 'Gripp' button for physical 3d operations.
                                </div>
                            </div>

                            <div className={`toggleInfo ${this.state.design3}`}>
                                <div className="content-figure">
                                    <img src={img11} className="full-img" />
                                </div>
                                <div className="toggle-show-info">The 2d interface includes a main screen for information sharing and management, and a toolbar for generated 3d models for co-design.
                            </div>
                            </div>

                        </div>
                    </section>

             

                    <section className="implementation white">
                        <div className="body">
                            <div className="content-title">Development</div>
                            <div className="content-title-second">Approach</div>
                            <div className="content-text">
                                Guided by the design guideline, I develop the VR system by myself. The development process was generally divided into three phases: 
                            </div>
                            <div className="content-figure">
                                <img src={img05} className="full-img" />
                            </div>
                            <div className="content-figure-two">
                                <img src={img14} />
                                <img src={img15}  />
                            </div>
                        </div>
                    </section>


                    <section className="demo grey">
                        <div className="body">
                            <div className="content-title">Demo</div>
                            <div className="content-figure">
                                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/p9wiRqxX5Ao" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="content-text">
                            </div>
                        </div>
                    </section>


                    <section className="evaluation white">
                        <div className="body">
                            <div className="content-title">user evaluation</div>

                            <div className="content-title-second divide">Goal</div>
                            <div className="content-text">With this prototype, I invited 10 users for expert evaluation(4 cake makers, 6 customers). This validation aims to explore two research questions:
                                <ul>
                                    <li>How does CakeVR affect users' collaborative and social behavior in co-designing customized cakes?</li>
                                    <li>Do the design requirements fix users' latent needs in the cake co-design activities?</li>
                                </ul>
                            </div>

                            <div className="content-title-second divide">Approach</div>
                            <div className="content-title-third">Role-play in CakeVR</div>
                            <div className="content-text">A dual-user test was performed including one participant and one researcher. In CakeVR, they needed to respectively play the role of the cake maker or client, to collaboratively design a cake for an imaginary celebration event. 
                            </div>
                            <div className="content-figure">
                                <img src={img06} className="full-img" />
                            </div>


                            <div className="content-title-third ">Contextualization for cake-designing</div>
                            <div className="content-text">Contextualization is utilized, enabling the participants to be more immersed in their role. The test procedure of the test is divided into 3 phases:
                                <ul>
                                    <li>A beforehand skype interview asking participants to envision their dream cake for a certain event. The outcomes are reference images and key words describing the cake idea.</li>
                                    <li>These reference images will be loaded into the VR application for the formal VR co-design sessions.</li>
                                    <li>A post-test interview will be performed, and the participants were asked to fill in the System Usability Scale questionnaires (SUS).</li>
                                </ul>
                            </div>
                            <div className="content-figure">
                                <img src={img07} className="full-img" />
                            </div>

                            <div className="content-title-second divide">Test Results</div>
                            <div className="content-text">The research was derived from the two analysis methods:
                                <ul>
                                    <li> observing screen-captured video of VR viewport of participants.</li>
                                    <li>The thematic analysis of the interview quotations.</li>
                                </ul>
                                Then, we figured out the impact of the CakeVR tool, and validated its interaction techniques and functions.
                            </div>

                            <div className="content-info-block block-lightgrey">
                                <div className="content-title-third">Added Value 1: Higher Efficiency of Communication</div>
                                <div className="quotation">"3D manipulation enables me to express my design ideas quickly. I have a feeling of control, when I can resize the virtual cake, and show it immediately to the cake maker how large the cake should be."</div>
                                <div className="content-text">The efficiency of communication about cake ideas was highly improved due to <b>the real-time 3d manipulation and embodiment.</b> Collaborators can quickly edit the cake to show and evaluate their design ideas, and quickly reach consensus.
                                </div>
                            </div>

                            <div className="content-info-block block-lightgrey">
                                <div className="content-title-third">Added Value 2: Shared Understanding Between Collaborators</div>
                                <div className="quotation">"I could easily understand the cake maker because we were discussing and looking at the same image."</div>
                                <div className="content-text">All the participants claimed that CakeVR helped to build up better shared understandings of the design process and final decisions between collaborators, due to the abundant <b>visual evidence (i.e., images, 3d models), interactive 3d visualization</b> as well as <b>intuitive deictic gestures</b> with hand or laser pointers.
                                </div>
                            </div>

                            <div className="content-info-block block-lightgrey">
                                <div className="content-title-third">Added Value 3: Quick to Learn and Easy to Use</div>
                                <div className="quotation">"The interaction was straightforward and gave clear use cues."</div>
                                <div className="content-text">All the participants confirmed that the system, especially the gesture-based 3d manipulation was quick to learn and easy to use. This conclusion is also supported by the results of the System Usability Scale, in which 6/10 participants gave a score higher than the level "good".
                                </div>
                                <div className="content-figure">
                                    <img src={img08} width="50%" className="img-shadow" />
                                </div>
                            </div>

                            <div className="content-info-block block-lightgrey">
                                <div className="content-title-third">Validation of Design Requirements</div>
                         
                                <div className="content-text">I validate each requirement by asking two questions, with regard to the user experience and utility of the design requirements. The result shows that 100% of the design requirements are helpful to the co-design work, and realized in a good quality.
                                </div>
                                <div className="content-figure">
                                <img src={img13} className="shrink-img" />
                                </div>
                            </div>

                        </div>
                    </section>

                </div>


                <AllWorks selected="one" />
            </div>

        );
    }
}

export default CakeVR;
